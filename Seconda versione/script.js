new Vue ({
    el: '#root',
    data() {
        return {
            arrCard: [],
        };
    },
    computed: {
        filteredSongs() {
            if (this.selectedValue === 'none') {
                return this.arrCard;
            }
            return this.arrCard.filter((cardSong) => cardSong.genre === this.selectedValue);
        }
    },
    created(){
        axios.get('api.php')
        .then(axiosResponse => {
            console.log(axiosResponse)
            this.arrCard = axiosResponse.data;
        })
    },
})

/* UN PO DI PROVE

SAREBBE COSI IL CODICE  axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(axiosResponse => {}


function then(functionDaChiamareQuandoArrivaRisposta) {
    //...
    const oggettoDaPassare = {
        data: {
            response: ''
        },

    };
    functionDaChiamareQuandoArrivaRisposta(oggettoDaPassare);
}
then(() => {

});

function get() {
    return {
        then() {

        }
    }
}
*/

/*


function a() {

}
a();

const a = function() {

};
a();

const a = () => {

};
a();
*/