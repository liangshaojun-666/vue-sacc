<template>
    <div class="Container">
        <div class="box">
            <img src="../../assets/img/xueyuan.png" alt="" />
        </div>
        <div class="title">
            <img src="../../assets/img/right-img.png" alt="" />
        </div>
        <div class="mainBox">
            <input type="text" placeholder="输入学号/工号" v-model="StuParams.id" />
            <input type="password" placeholder="输入统一身份认证密码" v-model="StuParams.plainPassword" />
            <button class="btn" @click="login">登录</button>
            <!-- <button class="btn" @click="go">fake登录</button> -->
        </div>
    </div>
</template>

<script>
import Rsa from "../../../src/utils/rsa"
import rsaPublicData from "../../../src/utils/rsa"
import { login, getpubKey } from "../../api/Student.js"
export default {
    data () {
        return {
            StuParams: {
                id: "",
                password: "",
                plainPassword: "",
            },

        }
    },
    methods: {

        go () {
            this.$router.push("/home/totalassessment")
        },

        login () {
            getpubKey()
                .then((response) => {
                    // console.log(response.data.data.publicKey)


                    let publicKey = response.data.data.publicKey
                    const encryptedPassword = rsaPublicData(publicKey, this.$data.StuParams.plainPassword)
                    // console.log(encryptedPassword)
                    let postdata = {
                        id: this.$data.StuParams.id,
                        password: encryptedPassword
                    }

                    login(postdata)
                        .then((res) => {
                            if (res.data.success == true) {
                                if (res.data.data.role == 0) {
                                    localStorage.setItem("token", res.data.data.token)
                                    this.$router.push("/home/totalassessment")
                                } else {
                                    this.$router.push("/t_home/auditlist")

                                }
                            } else {
                                alert("登录失败！！请检查学号或密码")
                            }
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                })
                .catch((error) => {
                    console.error("获取公钥时出错：", error)
                })
        },
    },
}

</script>

<style scoped>
.Container {
    width: 100vw;
    height: 100vh;
    background-image: url(../../assets/img/login.png);
    background-size: 100% 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    zoom: 1;
    z-index: -10;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn {
    width: 8.75rem;
    height: 2.875rem;
    border-radius: 1.4375rem;
    background-color: rgba(0, 43, 255, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 1.15rem;
    border: 0;
    transition: 0.2s;
    cursor: pointer;
    margin-top: 2rem;
}

.btn:hover {
    width: 9rem;
    height: 3rem;
    background-color: #4176e9;
}

input[type="password"],
input[type="text"] {
    width: 18rem;
    height: 2.875rem;
    opacity: 1;
    border-radius: 0.875rem;
    background: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 1);
    border: 0;
    text-align: center;
    outline: none;
    caret-color: auto;
    transition: 0.5s;
    font-size: 1rem;
    color: rgba(166, 166, 166, 1);
}

input[type="password"]:focus,
input[type="text"]:focus {
    width: 22rem;
    height: 3.5rem;
    font-size: 1.5rem;
}

input:focus::-webkit-input-placeholder {
    color: transparent;
}

.mainBox {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 6vh;
}

.box {
    width: 20%;
    margin-top: 15vh;
}

.box img {
    width: 100%;
}

.title {
    margin-top: 5vh;
    width: 25%;
}

.title img {
    width: 100%;
}

input[type="password"],
input[type="submit"] {
    margin-top: 4vh;
}
</style>
