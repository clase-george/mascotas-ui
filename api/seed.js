// Mascotas
import {sequelize} from "./db.js";
import {Mascota} from "./models/Mascota.js";

const mascotas = [
    {
        "numeroChip": "CH100001",
        "nombre": "Garfield",
        "tipo": "gato",
        "raza": "British Shorthair",
        "edad": 1,
        "pesoKg": 4.3
    },
    {
        "numeroChip": "CH100002",
        "nombre": "Duna",
        "tipo": "perro",
        "raza": "Bulldog Inglés",
        "edad": 10,
        "pesoKg": 16.8
    },
    {
        "numeroChip": "CH100003",
        "nombre": "Loki",
        "tipo": "gato",
        "raza": "Persa",
        "edad": 8,
        "pesoKg": 4.2
    },
    {
        "numeroChip": "CH100004",
        "nombre": "Zeus",
        "tipo": "perro",
        "raza": "Pastor Alemán",
        "edad": 2,
        "pesoKg": 37.2
    },
    {
        "numeroChip": "CH100005",
        "nombre": "Nina",
        "tipo": "gato",
        "raza": "Maine Coon",
        "edad": 9,
        "pesoKg": 5.4
    },
    {
        "numeroChip": "CH100006",
        "nombre": "Bobby",
        "tipo": "perro",
        "raza": "Carlino",
        "edad": 2,
        "pesoKg": 18.8
    },
    {
        "numeroChip": "CH100007",
        "nombre": "Garfield",
        "tipo": "gato",
        "raza": "Persa",
        "edad": 3,
        "pesoKg": 4.6
    },
    {
        "numeroChip": "CH100008",
        "nombre": "Zeus",
        "tipo": "perro",
        "raza": "Golden Retriever",
        "edad": 3,
        "pesoKg": 7.9
    },
    {
        "numeroChip": "CH100009",
        "nombre": "Chispa",
        "tipo": "gato",
        "raza": "British Shorthair",
        "edad": 1,
        "pesoKg": 3.3
    },
    {
        "numeroChip": "CH100010",
        "nombre": "Thor",
        "tipo": "perro",
        "raza": "Pastor Alemán",
        "edad": 15,
        "pesoKg": 35.4
    },
    {
        "numeroChip": "CH100011",
        "nombre": "Pixel",
        "tipo": "gato",
        "raza": "British Shorthair",
        "edad": 12,
        "pesoKg": 4.2
    },
    {
        "numeroChip": "CH100012",
        "nombre": "Rocky",
        "tipo": "perro",
        "raza": "Golden Retriever",
        "edad": 14,
        "pesoKg": 12.4
    },
    {
        "numeroChip": "CH100013",
        "nombre": "Olivia",
        "tipo": "gato",
        "raza": "Persa",
        "edad": 7,
        "pesoKg": 6.3
    },
    {
        "numeroChip": "CH100014",
        "nombre": "Kiwi",
        "tipo": "perro",
        "raza": "Pastor Alemán",
        "edad": 11,
        "pesoKg": 12.2
    },
    {
        "numeroChip": "CH100015",
        "nombre": "Tom",
        "tipo": "gato",
        "raza": "Maine Coon",
        "edad": 9,
        "pesoKg": 3.8
    },
    {
        "numeroChip": "CH100016",
        "nombre": "Zeus",
        "tipo": "perro",
        "raza": "Pastor Alemán",
        "edad": 3,
        "pesoKg": 37.3
    },
    {
        "numeroChip": "CH100017",
        "nombre": "Lena",
        "tipo": "gato",
        "raza": "Siames",
        "edad": 13,
        "pesoKg": 4.1
    },
    {
        "numeroChip": "CH100018",
        "nombre": "Otto",
        "tipo": "perro",
        "raza": "Bulldog Inglés",
        "edad": 12,
        "pesoKg": 37.3
    },
    {
        "numeroChip": "CH100019",
        "nombre": "Chispa",
        "tipo": "gato",
        "raza": "British Shorthair",
        "edad": 1,
        "pesoKg": 4.8
    },
    {
        "numeroChip": "CH100020",
        "nombre": "Lucky",
        "tipo": "perro",
        "raza": "Labrador Retriever",
        "edad": 4,
        "pesoKg": 20.8
    },
    {
        "numeroChip": "CH100021",
        "nombre": "Loki",
        "tipo": "gato",
        "raza": "British Shorthair",
        "edad": 2,
        "pesoKg": 7.8
    },
    {
        "numeroChip": "CH100022",
        "nombre": "Zeus",
        "tipo": "perro",
        "raza": "Labrador Retriever",
        "edad": 1,
        "pesoKg": 24.7
    },
    {
        "numeroChip": "CH100023",
        "nombre": "Nala",
        "tipo": "gato",
        "raza": "Maine Coon",
        "edad": 13,
        "pesoKg": 4.2
    },
    {
        "numeroChip": "CH100024",
        "nombre": "Zeus",
        "tipo": "perro",
        "raza": "Pastor Alemán",
        "edad": 16,
        "pesoKg": 5.6
    },
    {
        "numeroChip": "CH100025",
        "nombre": "Nala",
        "tipo": "gato",
        "raza": "Maine Coon",
        "edad": 7,
        "pesoKg": 4.4
    },
    {
        "numeroChip": "CH100026",
        "nombre": "Greta",
        "tipo": "perro",
        "raza": "Golden Retriever",
        "edad": 5,
        "pesoKg": 35.6
    },
    {
        "numeroChip": "CH100027",
        "nombre": "Mango",
        "tipo": "gato",
        "raza": "Maine Coon",
        "edad": 6,
        "pesoKg": 6.8
    },
    {
        "numeroChip": "CH100028",
        "nombre": "Bobby",
        "tipo": "perro",
        "raza": "Golden Retriever",
        "edad": 2,
        "pesoKg": 12.3
    },
    {
        "numeroChip": "CH100029",
        "nombre": "Misu",
        "tipo": "gato",
        "raza": "Europeo común",
        "edad": 4,
        "pesoKg": 6.9
    },
    {
        "numeroChip": "CH100030",
        "nombre": "Zeus",
        "tipo": "perro",
        "raza": "Labrador Retriever",
        "edad": 5,
        "pesoKg": 37.8
    },
    {
        "numeroChip": "CH100031",
        "nombre": "Luna",
        "tipo": "gato",
        "raza": "Maine Coon",
        "edad": 3,
        "pesoKg": 3.9
    },
    {
        "numeroChip": "CH100032",
        "nombre": "Otto",
        "tipo": "perro",
        "raza": "Pastor Alemán",
        "edad": 10,
        "pesoKg": 35.0
    },
    {
        "numeroChip": "CH100033",
        "nombre": "Garfield",
        "tipo": "gato",
        "raza": "Maine Coon",
        "edad": 14,
        "pesoKg": 7.0
    },
    {
        "numeroChip": "CH100034",
        "nombre": "Lucky",
        "tipo": "perro",
        "raza": "Pastor Alemán",
        "edad": 9,
        "pesoKg": 33.7
    },
    {
        "numeroChip": "CH100035",
        "nombre": "Nala",
        "tipo": "gato",
        "raza": "British Shorthair",
        "edad": 1,
        "pesoKg": 4.6
    },
    {
        "numeroChip": "CH100036",
        "nombre": "Baco",
        "tipo": "perro",
        "raza": "Bulldog Inglés",
        "edad": 2,
        "pesoKg": 20.0
    },
    {
        "numeroChip": "CH100037",
        "nombre": "Lena",
        "tipo": "gato",
        "raza": "Persa",
        "edad": 4,
        "pesoKg": 4.7
    },
    {
        "numeroChip": "CH100038",
        "nombre": "Menta",
        "tipo": "perro",
        "raza": "Labrador Retriever",
        "edad": 15,
        "pesoKg": 32.0
    },
    {
        "numeroChip": "CH100039",
        "nombre": "Noa",
        "tipo": "gato",
        "raza": "British Shorthair",
        "edad": 15,
        "pesoKg": 5.6
    },
    {
        "numeroChip": "CH100040",
        "nombre": "Rex",
        "tipo": "perro",
        "raza": "Bulldog Inglés",
        "edad": 7,
        "pesoKg": 37.3
    },
    {
        "numeroChip": "CH100041",
        "nombre": "Chispa",
        "tipo": "gato",
        "raza": "British Shorthair",
        "edad": 7,
        "pesoKg": 3.4
    },
    {
        "numeroChip": "CH100042",
        "nombre": "Thor",
        "tipo": "perro",
        "raza": "Carlino",
        "edad": 12,
        "pesoKg": 20.3
    },
    {
        "numeroChip": "CH100043",
        "nombre": "Mango",
        "tipo": "gato",
        "raza": "Europeo común",
        "edad": 9,
        "pesoKg": 6.8
    },
    {
        "numeroChip": "CH100044",
        "nombre": "Zeus",
        "tipo": "perro",
        "raza": "Pastor Alemán",
        "edad": 16,
        "pesoKg": 17.9
    },
    {
        "numeroChip": "CH100045",
        "nombre": "Chispa",
        "tipo": "gato",
        "raza": "Maine Coon",
        "edad": 9,
        "pesoKg": 3.3
    },
    {
        "numeroChip": "CH100046",
        "nombre": "Tango",
        "tipo": "perro",
        "raza": "Labrador Retriever",
        "edad": 6,
        "pesoKg": 16.7
    },
    {
        "numeroChip": "CH100047",
        "nombre": "Ruby",
        "tipo": "gato",
        "raza": "Europeo común",
        "edad": 12,
        "pesoKg": 5.7
    },
    {
        "numeroChip": "CH100048",
        "nombre": "Lucky",
        "tipo": "perro",
        "raza": "Carlino",
        "edad": 2,
        "pesoKg": 14.4
    },
    {
        "numeroChip": "CH100049",
        "nombre": "Tom",
        "tipo": "gato",
        "raza": "Maine Coon",
        "edad": 7,
        "pesoKg": 7.3
    },
    {
        "numeroChip": "CH100050",
        "nombre": "Sasha",
        "tipo": "perro",
        "raza": "Carlino",
        "edad": 10,
        "pesoKg": 27.7
    }
];

export default async function seed() {
    try {
        console.log("Conectando con la base de datos...");
        await sequelize.authenticate();

        await sequelize.sync({force: true});
        console.log("Tablas sincronizadas (force: true) ✅");
        console.log("Insertando mascotas...");
        await Mascota.bulkCreate(mascotas);
        console.log("Mascotas insertadas ✅");


        console.log("Seed completado correctamente 🎉");
    } catch (error) {
        console.error("Error ejecutando el seed:", error);
        process.exit(1);
    }
}