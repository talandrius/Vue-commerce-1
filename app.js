Vue.component("fiche-produit", {
  template: `<div class="tile is-child notification is-warning">{{ nom }} <br/>
  <button class="button is-danger " v-on:click="passer_commande(nom)" v-if="role == 'commande'">Commander
  </button> </div>`,
  props: ["nom", "role"],
  methods: {
    passer_commande: function(produit) {
      this.$emit("commande-passee", produit);
    }
  }
});

var app = new Vue({
  el: "#app",
  data: {
    user: "Bertrand",
    produits: ["Pizza", "Hamburger", "Chesse", "Tacos"],
    commandes: [],
    affichage: "title has-text-primary"
  },
  methods: {
    commander: function(produit) {
      this.commandes.push(produit);
    }
  }
});
