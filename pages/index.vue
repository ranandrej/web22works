<script setup>
import {GraphQLClient,gql} from "graphql-request"
import Navbar from "../components/Navbar.vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Loading from "../components/Loading.vue"
import Contact from "../components/Contact.vue"
import  NotFound  from "../components/NotFound.vue"
import ScrollTop from "../components/ScrollTop.vue"
const graphcms=new GraphQLClient('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clhmh599j51pe01un17isa6ls/master')
const QUERY=gql`
{
  posts{
    id,
    title,
    description,
    category,
    datePublished,
    slug,
    content{
      html
    },
    coverPhoto{
      url
    }
    author{
      name,
      avatar{
        url
      }
    }
      
    

    }
  }
    

`
const filteredPosts=ref([])
const input=ref("")
const post=ref({})
const loading=ref(false)
const notfound=ref(false)
onMounted(async()=>{
  const {posts}=await graphcms.request(QUERY)
  console.log(posts)
 
  post.value=posts
  console.log(post.value)
  loading.value=true;
  filteredPosts.value=post.value
})
const filter=()=>{
  if(input.value==""){ 
    filteredPosts.value=post.value
  }else{
    
    filteredPosts.value=post.value.filter(p=>p.category.toLowerCase()==input.value.toLowerCase())
  }
  if(filteredPosts.value.length==0){
    notfound.value=true
  }else{
    notfound.value=false
  }
}
</script>
<template>
  <Navbar/>
  <ScrollTop/>
  <section class="all" v-if="loading">
    <Header/>
  <div class="box">
    <h4>Search by category</h4>
    <div class="search">
  <input class="input is-primary" type="text" placeholder="eg.Sport,Moto-sport,Technology..." v-model.trim="input">
  <button class="button is-primary" @click="filter">Search</button>
</div>
</div>

  <div class="recent">
    <h1>Recent posts</h1>
  </div>
  <NotFound v-if="notfound"/>
  <section class="blogs">
    
  <div class="card" v-for="card in filteredPosts">
    <div class="card-header">
      <img :src="card.coverPhoto.url" alt="rover" />
    </div>
    <div class="card-body">
      <span class="tag tag-teal">{{ card.category }}</span>
      <h4>
        {{ card.title }}
      </h4>
      <p>
        {{ card.description }}
      </p>
      <NuxtLink :to="`/${card.slug}`" class="button is-info is-small is-outlined">Read more</NuxtLink>
      <div class="user">
        <img :src="card.author.avatar.url" alt="user" />
        <div class="user-info">
          <h5>{{ card.author.name }}</h5>
          <small>{{ card.datePublished }}</small>
        </div>
      </div>
    </div>
  </div>
</section>

<Contact/>
<Footer/>
</section>
<Loading v-else/>
    </template>
  <style scoped>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

  *{
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  }
  .all{
    margin-top: 0;
    background-image: url("../assets/background.svg");
    background-position: center;
    background-size: cover;
    padding-top: 50px;
  }
  .footer{
    position: static;
  }
  .blogs{
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .card {
  margin: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 50px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 250px;
  cursor: pointer;
  transition: transform 0.7s ease-out
}
.card:hover{
  transform: translateY(-10px);
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
.footer{
    background-color: black;
}
.box{
  max-width: 35%;
  margin: 0 auto;
}
.search{
  display: flex;
}
.search button{
  margin-left: 10px;
}
.recent{
  margin-top: 80px;
}
.recent h1{
     max-width: 65%;
     margin: 0 auto;
     font-size: 25px;
     color:white;

}
.button{
  margin-bottom: 20px;
}
@media screen and (max-width: 560px) {
     .box{
      max-width: 80%;
     }
     .blogs{
      width: 100%;
     }
     .card{
      margin: 0 auto;
      margin-bottom: 40px;
      width: 70%;
     }
     
}
  </style>