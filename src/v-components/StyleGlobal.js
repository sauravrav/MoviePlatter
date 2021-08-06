import { createGlobalStyle } from "styled-components";
const StyleGlobal = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
body{
    background-color:black;
    font-family: 'Montserrat', sans-serif;
}
html{
    &::-webkit-scrollbar{
        width:0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: hotpink;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }

}
//AboutUs1 styling
.image{
    margin:50px 0px 0px 300px;
    img{
        height:90vh;
        width:70vh;
        border-radius:20px;
        object-fit:cover;
    }
}
.description{
    margin:200px 0px 0px 100px;
    .title{
        h2{
            font-size:50px;
            margin:20px 20px 20px 0px;
        }
        span{
            color:#ff94ca;
        }
    }
    p{
        font-size:20px;
    }
    button{
        padding:10px;
        color:white;
        background-color:black;
        border:2px solid hotpink;
        border-radius:10px;
        margin:20px 0px 0px 0px;
        cursor:pointer;
        transition:all 0.3s ease;
        &:hover{
            color:black;
            background-color:#ff94ca;
            padding:12px;
        }
    }
}
//AboutUs2
.about2-image{
        height:600px;
        width:300px;
        border-radius:20px;
    }
.line{
    background:whitesmoke;
    height:0.4rem;
    margin:2rem 0rem;
    width:100%;
  }
`;
//AboutUs3

export default StyleGlobal;
