<script setup>
import { GraphQLClient,gql } from 'graphql-request';
import Navbar from '../components/Navbar.vue';
import Footer from "../components/Footer.vue"
import Popup from '../components/Popup.vue';
import Error from "../components/Error.vue"
import Loading from "../components/Loading.vue"
import ScrollTop from '../components/ScrollTop.vue';
const posts=ref({})
const related=ref([])
const loading=ref(false)
const comment=ref("")
const username=ref("")
const showPopup=ref(false)
const showError=ref(false)
onMounted(async()=>{
    const graphcms=new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhmh599j51pe01un17isa6ls/master')
const QUERY=gql`
query GetPostsBySlug($slug:String!){
    post(where:{slug:$slug}){
        title,
        subtitle,
        category,
        comments{
            username,
            content
        },
        coverPhoto{
            url
        },
        content{
            html
        },
        datePublished,
        author{
            name,
            avatar{
                url
            }
        }
        
        
    }
}

`

    
    const {slug}=useRoute().params
    const variables={slug}
    const response=await graphcms.request(QUERY,variables)
    posts.value=response
    console.log(posts.value.post.category)
    const cat=posts.value.post.category
    const variable={cat};
    const QUERY2=gql`
    query GetPostsBySlug($cat:String!){
    posts(where:{category:$cat}){
        title,
        author{
            name
        },
        subtitle,
        datePublished,
        category,
        slug,
        coverPhoto{
            url
        }
    }
}`
    const response2=await graphcms.request(QUERY2,variable);
    console.log(response2)
    related.value=response2
    console.log(posts.value)
    loading.value=true;
})
const authToken='eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODQzNDY0MTMsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xobWg1OTlqNTFwZTAxdW4xN2lzYTZscy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiMzhlZjNhYTMtNzczZi00MzFmLTg2NGItZjRiNDZjOWNjNGFkIiwianRpIjoiY2xoczBkNmN2MWliMzAxdW84c2N2N3RmYSJ9.zYZ-SpDQAFzZ-8Oy8xBH_HuZJSNdagEcbVMD9INPKxkzh9XZgA150aUbX3t4qUKXbxtzrDhZFNB12YYZUyoJd1VbXMbPn1t0tIO7qlfaTz6Iqwdce6gnI7uKuBHNnWbqlnZKAvfho2nEKn-6Rnw_y-Zt9pC_EJXknSs6_vru5F-MnaSFEOrI41gf-4nUN9bq6ySM9dI8oN_I3cXxsmTC1aOljOFxKidDF_4xsw8GvxdoA9MiNiTZAFZjGwVr5rqaHG8p9sRwPhNjyRmN4KDZc26f3ZLGBm3LjSrAukhvlksH6Dnz2JCKy8oLBhsaC4qw4KVwgueWHnx16yQTuH1no6pEoNF7P0QWa59hcqwWzawaPC93U9bZBZSw4Q0M2xTApJOfYoYWXNmPM1Uq37hkvqu25_yKT5jhhZCGyAa7YBvuXBIrw0Zo-jJaQgdhYv7shKv6FsGj1rmeIpklGHaOJi_GcdrH4wH0SiTUbi7hwRlhNOIrdYZWkbj5s4IV7_gjOLyDCXlKWNiBxUJ7Sfr2OzmAAJ7GKu5z6mnBmfTJYFr_FCxnx_0WNvvGb0Qz9-1bwDz6WPDrz2oJZYDtptFK6ptzKE3_twIYwMRAGnsGuduSRIPhuZfV2Md5NLICHJZTPcTjTwxesVyi9DGKJfbR-am-Bf81kTWvsHKBRYL6uXI'

const createComment=()=>{
    if(comment.value!="" && username.value!=""){ 
    const mutation=gql`
    mutation MyMutation($content:String!,$username:String!,$slug:String!) {
  createComment(data: {content:$content,username:$username,post:{connect:{slug:$slug}}}) {
    id
  }
}
    `
    const {slug}=useRoute().params
    const variables={
        content:comment.value,
        username:username.value,
        slug:slug

    }
    const headers = {
    Authorization: `Bearer ${authToken}`
  };
const graphcms=new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhmh599j51pe01un17isa6ls/master')
const odgovor=graphcms.request(mutation,variables,headers)
console.log(odgovor);
showPopup.value=true
setTimeout(()=>{
    comment.value=""
    username.value=""
},3500)
setTimeout(()=>{
    showPopup.value=false
},3500)
    }else{
        showError.value=true
        setTimeout(()=>{
    showError.value=false
},3500)
    }
}
</script>
<template>

<Navbar/>
<ScrollTop/>
<Popup v-if="showPopup"/>
<Error v-if="showError"/>
<section class="all" v-if="loading">

  
  



<section class="section is-medium" v-for="post in posts">
    <div class="cover">
        <img :src="post.coverPhoto.url" alt="">
    </div>
    <div class="content subtitle">
        <h1>{{ post.subtitle }}</h1>
    </div>
    <div class="author box" v-for="post in posts">
        <figure class="image is-48x48">
         <img class="is-rounded" :src="post.author.avatar.url">
       </figure>
       <p class="info">-{{ post.author.name }}<br><span>Published:{{ post.datePublished }}</span></p>
       
    </div>
    <div class="content card" v-html="post.content.html">

</div>
    
   

</section>
<div class="desni">
    <div class="field " >
  <div class="control  ">
   
    
    <div class="linkovi">
    <h1>Related posts:</h1>
    <div class="kartice">
    <div class="related karta" v-for="post in related.posts">
        
         <img   :src="post.coverPhoto.url">
       <div class="info2">
       <span class="tag tag-teal">{{ post.category }}</span>

       <h4>{{ post.title }}</h4>
       <p>{{ post.datePublished }}</p>
       <NuxtLink :to="`/${post.slug}`" class="button is-primary is-small">Read more</NuxtLink>
    </div>
    </div>
    </div>
   
</div>
    
  
  </div>
</div>
<div class="commentHeading">
    <h3>Comments</h3>
</div>
<div class="comments box">
    
    <div class="comment" v-for="comment in posts.post.comments">
        <article class="media">
  <figure class="media-left">
    <p class="image is-64x64 is-round" >
      <img src="../assets/profile.png">
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <strong>@{{ comment.username }}</strong>
        <br>
        {{ comment.content }}
      </p>
    </div>
    
  </div>
  
</article>
    </div>
   
</div>
<div class="addComment card">
        <h2>Add comment</h2>
        <input type="text" class="input is-primary is-rounded" placeholder="Username" v-model="username">
        <textarea class="input is-primary is-rounded" placeholder="Comment" v-model="comment"></textarea>
        <button class="button is-primary is-rounded" @click="createComment">Post</button>
    </div>
</div>
</section>
<Loading v-else/>
<Footer v-if="loading"/>

</template>
<style scoped>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
/* Option 2: Import via CSS */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
*{
    overflow-x: hidden;
}
.section{
    max-width: 60%;
}
.field{
    margin-top: 100px;
    max-width: 300px;
}
.field label{
    font-weight: 200;
    font-size: 20px;
}
.field button{
    margin-top: 10px;
    cursor: pointer;
}
.cover img{
    width: 100%;
    max-height: 500px;
    border-radius: 10px;
    object-fit: cover;
}
.reklama{
    margin: 0 auto;
}
.image{
    margin: 0 auto;
    max-width: 70%;
    margin-top: 0;
    margin-bottom: 50px;
    
}
.title{
    overflow-y: hidden;
    height: 50px;
}
.subtitle{
    overflow-y: hidden;
    height: 40px;
}
.image img{
    max-height: 500px
}
.content h1{
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 25px;
    height: 50px;
    color: white;
}
.linkovi h1{
    color: white;
}
.author{
    max-width: 300px;
    display: flex;
    flex-wrap: wrap;
    max-height: 80px;
    padding: 20px;
    position: relative;
    overflow-y: hidden;
    margin-bottom: 10px;
    
    
}
.author figure{
    max-width: 100px;
    margin: 10px;
    margin-bottom: 20px;
    margin-top: 0;
}
.content img{
    max-height: 500px;
}
.author p{
    font-size: 18px;
    text-align: left;
    margin-top: 5px;
    cursor: default;
    font-weight: 600;

}
.linkovi{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
}
.card{
    padding: 30px;
    margin: 0 auto;
    padding: 30px;
    max-width: 100%;
    white-space: pre-line;
    text-align: left;
}
.text img{
    margin: 50px;
}

.info span{
    font-size: 12px;
    color: black;
    margin-top: 0;
    position: relative;
    bottom: 10px;
    font-weight: 200;
}
.section{
    position: relative;
    
}

.content{
    white-space: pre-wrap;
}
.content h1{
    overflow-y: hidden;
}
p{
    word-wrap: break-word;
}

.text{
    margin-bottom: 10px;
}
.section{
    position: relative;
    
}

.all{
    display: flex;
    background-image: url("../assets/background2.svg");
    background-position: center;
    background-size: cover;
    background-repeat: repeat-y;
    background-clip: padding-box;
}
.desni{
    max-width: 30%;
}
.related-posts h1{
    max-width: 20%;
    margin: 0 auto;
    font-size: 38px;
    color: black;
    margin-top: 20px;
    font-weight: 300;
}
.related{
    
    margin-left: 0;
    margin-right:20px ;
    max-height: 270px;
}
.related.karta img{
    width: 100%;
    max-height: 130px;
    margin: 0;
    object-fit: cover;
   
}
.related.karta{
  margin: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 200px;
  cursor: pointer;
  transition: transform 0.7s ease-out;
  max-height:300px;
}
.info2{
    padding: 15px;
}
.info2 p{
    font-size: 14px;
    font-weight: 200;
}
.info2 h4{
    font-weight: 400;
}
.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: white;
  padding: 2px 10px;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.linkovi h1{
    margin-top: 50px;
    margin-left: 50px;
    font-size: 20px;
}
.comments{
    margin-top: 10px;
    padding: 20px;
    width: 100%;
    
    
}
.commentHeading h3{
    font-size: 20px;
    margin-bottom: 0;
    margin-top: 50px;
    color: white;
}
.comments p{
    margin-bottom: 15px;
    font-size: 16px;
}
.comments input{
    margin-bottom: 15px;
    padding: 15px;
}
.comments textarea{
    border-radius: 10px;
    height: 100px;
}
.addComment{
    padding: 30px;
    margin-bottom: 50px;
}
.addComment input{
    margin-bottom: 15px;
}
.addComment textarea{
    margin-bottom: 20px;
    min-height: 80px;
    border-radius: 10px;
}
.addComment h2{
    font-size: 20px;
    margin-bottom: 10px;
}
.comments{
    max-height: 250px;
    overflow-y: visible;
}
.comments h3{
    font-size: 20px;
    margin-bottom: 25px;
}
.media img{
    border-radius: 50px;
}
.media-content strong{
    font-size: 15px;
}
@media screen and (max-width: 600px) {
     
     .subtitle h1{
        font-size: 20px;
     }
    
     .subtitle{
        margin-top: 30px;
        margin-right: 30px;
     }
     .all{
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-right:0 ;
     }
     .cover{
        width: 100%;
     }
     .section.is-medium{
        max-width: 100%;
     }
   .desni{
    max-width: 80%;
    margin-left: 50px;
   }
   .related.karta{
    max-width: 140px;
    margin-top: 15px;
    margin-bottom: 25px;
    margin-right: 5px;
    margin-left: 5px;
    max-height: 350px;
   }
   .related.karta img{
    height: 100px;
   }
   .kartice{
    display: flex;
    flex-wrap: wrap;

   }
   .info2 h4{
    font-size: 14px;
   }
   .tag{
    padding: 7px;
    font-size: 12px;
   }
}
</style>