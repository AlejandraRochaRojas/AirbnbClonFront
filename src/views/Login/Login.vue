<template>
  <v-container>
    <v-row justify="space-around">
  <div>
    <section class="web-inner">
      <v-form class="mx-20" @submit="checkForm" action="/something" method="post">
        <v-text-field id="email"
          v-model="form.email"
          label="E-mail"
          required
          :class="{'error':validaEmail}"
        ></v-text-field>

        <v-text-field id="password"
          @click:append="passwordShow = !passwordShow"
          v-model="form.password"
          :append-icon="passwordShow ? 'visibility' : 'visibility_off'"
          :type="passwordShow ? 'password' : 'text'"
          label="Contraseña"
          min="8"
          counter
          required
        ></v-text-field>
        <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
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
    <section>
      <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Registrate
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Registro</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Nombres*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Apellidos*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Contraseña*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label=" Repite la Contraseña*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*Campos obligatorios</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="close"
            color="blue darken-1"
            text
            @click="closeModal"
          >
            Cerrar
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click= "persist"
          >
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
    </section>
  </div>
  </v-row>
  </v-container>
</template>

<script src="./Login.js"></script>
