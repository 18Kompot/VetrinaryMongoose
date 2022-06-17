const mongoose = require("mongoose");
const schemaOwn = require("./owner");
const schemaPet = require("./pet");
const schemaVet = require("./vet");
let Pet;
let Vet;
let Owner;

main().catch((err) => console.log(err));
async function main() {
  mongoose.connect("mongodb://localhost:27017/Pets");
  console.log("connected");
  Pet = new mongoose.model("Pet", schemaPet.petObj);
  Vet = new mongoose.model("Vet", schemaVet.vetObj);
  Owner = new mongoose.model("Owner", schemaOwn.ownerObj);
  await findOwner("6298999aa0965b07c76afb59");
}

// async function createProduct() {
//   const newOwner = new owner({
//     firstname: "Ese",
//     lastname: "Vato",
//     email: "vato@gmail.com",
//     age: 21,
//     assignedvet: "62989aada0965b07c76afb5f",
//     ownedpet: "62989a69a0965b07c76afb5c",
//   });
//   await newOwner.save();
//   console.log(newOwner);
// }
//createProduct();

async function findOwner(fname) {
  const ownerToFind = await Owner.findById(fname);
  const petResult = ownerToFind.ownedpet;
  const vetResult = ownerToFind.assignedvet;
  console.log(`------OWNER------`);
  //console.log(ownerToFind);
  console.log(`${ownerToFind.firstname} ${ownerToFind.lastname}`);
  console.log(`------PETS------`);
  for (let i = 0; i < petResult.length; i++) {
    let pet = await Pet.findById(petResult[i]._id);
    console.log(`${pet.nickname} ${pet.age}`);
  }
  console.log(`------VET------`);
  let vet = await Vet.findById(vetResult._id);
  console.log(`${vet.firstname} ${vet.lastname}`);
  console.log(`${vet.phone}`);
}
