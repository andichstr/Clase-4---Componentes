Vue.component('mi-tabla', {
    props: {
        titulos: {
            type: Array,
            required: true,
        },
        registros: {
            type: Array,
            required: true,
        },
        clases: {
            type: String,
        }

    },
    template:`
        <div>
            <table :class="clases">
                <thead :class="clases">
                    <tr>
                        <th v-for="(item, i) in titulos" :key="i" scope="col">{{ item }}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, i) in registros" :key="i">
                        <th :class="clases">{{ i + 1 }}</th>
                        <td v-for="(reg, r) in item" :key="r">{{ reg }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `
});


var app = new Vue({
    el: "#app",
    data: {
        tabla1: {
            titulos: ["ID", "Nombre", "Apellido", "Provincia"],
            registros: [
                ["Andres","Schuster","Buenos Aires"],
                ["Lucila", "Fernandez", "Tucuman"],
                ["Julian", "Gomez", "Mendoza"],
                ["Carla", "Perez", "Neuquen"],
            ],
            clases: "fondoAzul letraBlanca",
        },
        tabla2: {
            titulos: ["ID", "Nombre", "Apellido", "Provincia"],
            registros: [
                ["Marcos","Galván","Santa Fe"],
                ["Gustavo", "Lopez", "Tierra del Fuego"],
                ["Barbara", "Gutierrez", "Chaco"],
                ["Sofia", "Vergara", "Misiones"],
            ],
            clases: "fondoGris letraVerde",
        },
        tabla3: {
            titulos: ["ID", "Nombre", "Apellido", "Provincia"],
            registros: [
                ["Martin","Salinas","Tucuman"],
                ["Matias", "Medina", "Buenos Aires"],
                ["Franco", "Sandoval", "Corrientes"],
                ["Julieta", "Venegas", "San Juan"],
            ],
            clases: "fondoMarron letraBlanca",
        }
    }
})