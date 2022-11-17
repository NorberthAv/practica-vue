let MovieComp = {

    template:`
    <div id ="id | formatId" class="card" :class"{movie-like : like}" >

        <img :src="cover" class="card-img-top">
            <div class="card-body">
                <h2 class="card-title">{{ title | uppercase | reverse }}</h2>
                    <p class="card-text">{{synopsis | excertp}}</p>
                        <button class="btn" :class="btnStatus"@click="toggleLike">
                            <span v-text="like ? 'Favorita':'Agregar a Favoritas'">
                            </span>
                            <i class="far fa-heart":class="{
                                'far':!like,
                                'fas':like
                            }"></i>
                        </button>
            </div>
    </div>
    `,
    props:{
        id:{
            type    :   Number,
            required:   true,
        },
        title:{
            type    :   String,
            required:   true,
        },
        synopsis:{
            type :  String,
            default : 'No posee Sinopsis'
        },
        cover:{
            type: String,
            required:true,
        },
        like:{
            type : Boolean,
            required: true,
            default(){
                return false
            }
        }
    }

}