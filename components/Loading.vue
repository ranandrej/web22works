<template>
    <div class="loading-spinner">
      <div class="circle"></div>
    </div>
  </template>
  
  <style scoped>
  *{
    overflow-y: hidden;
  }
  .loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  
  .circle {
    width: 40px;
    height: 40px;
    border: 4px solid #2196F3; /* Blue color */
    border-top: 4px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  </style>
  