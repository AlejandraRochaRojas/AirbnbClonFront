<template>
  <v-container>
    <v-row justify="space-around">
  <div>
    <section class="web-inner">
      <v-form class="mx-20">
        <v-text-field
          v-model="form.email"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          @click:append="passwordShow = !passwordShow"
          v-model="form.password"
          :append-icon="passwordShow ? 'visibility' : 'visibility_off'"
          :type="passwordShow ? 'password' : 'text'"
          label="Contraseña"
          min="8"
          counter
          required
        ></v-text-field>

        <v-btn
          @click="login"
          class="mr-4"
          color="primary"
        >
          Iniciar Sesión
        </v-btn>
        <v-btn @click="clearForm">Limpiar</v-btn>
      </v-form>
    </section>
  </div>
  </v-row>
  </v-container>
</template>

<script src="./Login.js"></script>
