<template>
    <section class="header">
        <h1>Browse your favourite <span>Blogs</span></h1>
        <p>Filter Blog topics by category search</p>
    </section>
</template>
<style scoped>
.header{
    width: 100%;
    margin-top: 20px;
}
.header h1{
    max-width: 40%;
    margin: 0 auto;
    font-size: 2rem;
    text-align: center;
    margin-top: 40px;
    color: white;
}
.header p{
    font-size: 1rem;
    margin: 0 auto;
    max-width: 40%;
    margin-bottom: 10px;
    text-align: center;
    color: white;

}
@media screen and (max-width:560px) {
    .header h1{
        font-size: 24px;
        max-width: 80%;
    }
    .header p{
        font-size: 18px;
        max-width: 80%;
    }
}
.header span{
    color: #00d1b2;
}
</style>