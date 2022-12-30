import { Prisma, PrismaClient, Role } from "@prisma/client";
import { userPick } from "~/utils/format.server";
import { prisma } from "~/utils/prisma.server";
// import { Profile,User,Corporation } from "@prisma/client";

// const deleteCorporation = prisma.corporation.deleteMany()
// const deleteUser = prisma.user.deleteMany()
// const deleteprofile = prisma.profile.deleteMany()
// const deleteAppointment = prisma.appointment.deleteMany()
// const deleteServices = prisma.services.deleteMany()
// const deleteTriage = prisma.triage.deleteMany()
// const deleteMedicalTest = prisma.medicalTest.deleteMany()
// const deleteRecipes = prisma.recipes.deleteMany()
// const deleteTestInfo = prisma.testInfo.deleteMany()
// const deleteReciepts = prisma.receipts.deleteMany()
// const deleteDiagnostic = prisma.diagnostics.deleteMany()
// const deleteDoctor = prisma.doctor.deleteMany()
// const deleteMedicines = prisma.medicines.deleteMany()
// const deletePharmacy = prisma.pharmacy.deleteMany()
// const deleteLaboratory = prisma.laboratory.deleteMany()

const corporationValues = [
  {
    name: "clinica sar carlos",
    ruc: "111111",
    fullDescription: "clinica san carlos la mejor de la ciudad",
  },
  {
    name: "clinica sar yefry",
    ruc: "2222222222",
    fullDescription: "yefry el mejor cirujado de la clinica",
  },
  {
    name: "clinica santamaria",
    ruc: "3333333",
    fullDescription: "clinica santamaria la mejor de la ciudad",
  },
  {
    name: "clinica sar juan",
    ruc: "4444444",
    fullDescription: "clinica san juan la mejor de la ciudad",
  },
];
const userValues: userPick[] = [
  // {documentNumber:"123214",password:"mimamamedijo",role:"DOCTOR",corporationId:2}
  {
    documentNumber: "34343434",
    password: "sdfdf",
    role: "ADMIN",
    corporationId: 1,
  },
  {
    documentNumber: "89898989",
    password: "1234",
    role: "DOCTOR",
    corporationId: 2,
  },
  {
    documentNumber: "12121212",
    password: "fsfds",
    role: "USER",
    corporationId: 1,
  },
  {
    documentNumber: "66060606",
    password: "sadsad",
    role: "SUPER_ADMIN",
    corporationId: 1,
  },
];
const profileValues = [
  {
    firstName: "wily",
    lastName: "hancco",
    phone: "7721321321",
    email: "wily12hancco@gmail.com",
    degree: "estudiante",
    image: "image.png",
    userId: 1,
  },
  {
    firstName: "yefry",
    lastName: "quispe",
    phone: "7721321321",
    email: "yefry12hancco@gmail.com",
    degree: "cirujano",
    image: "image.png",
    userId: 2,
  },
  {
    firstName: "ronald",
    lastName: "larico",
    phone: "7721321321",
    email: "ronald12hancco@gmail.com",
    degree: "profesor",
    image: "image.png",
    userId: 3,
  },
  {
    firstName: "jean",
    lastName: "cris",
    phone: "7721321321",
    email: "jean12hancco@gmail.com",
    degree: "devops",
    image: "image.png",
    userId: 4,
  },
];

const patientValues = [
  {
    firstName: "ronal",
    lastName: "larico",
    documentNumber: "23123123123",
    dateBirth: "13/03/2000",
    location: "los olivos lima",
    gender: "masculino",
    numberPhone: "213123123",
    department: "piso 12 al fondo",
    province: "juliaca",
    district: "san roman",
    bloodType: "o+",
    physicalHistory: "23123123",
    image: "patient.png",
    job: "agricultor",
    corporationId: 1,
  },
  {
    firstName: "joshy",
    lastName: "cruz",
    documentNumber: "8080080800",
    dateBirth: "13/03/2222",
    location: "las flores",
    gender: "femenino",
    numberPhone: "213123123",
    department: "piso 12 al fondo",
    province: "juliaca",
    district: "san roman",
    bloodType: "o+",
    physicalHistory: "23123123",
    image: "patient.png",
    job: "agricultor",
    corporationId: 1,
  },
  {
    firstName: "carla",
    lastName: "de la vega",
    documentNumber: "28282828",
    dateBirth: "13/03/1900",
    location: "la rustica 121",
    gender: "masculino",
    numberPhone: "213123123",
    department: "piso 12 al fondo",
    province: "juliaca",
    district: "san roman",
    bloodType: "o+",
    physicalHistory: "23123123",
    image: "patient.png",
    job: "agricultor",
    corporationId: 1,
  },
  {
    firstName: "maria",
    lastName: "san miguel",
    documentNumber: "73737373",
    dateBirth: "13/03/2221",
    location: "sallida puno",
    gender: "femenino",
    numberPhone: "213123123",
    department: "piso 12 al fondo",
    province: "juliaca",
    district: "san roman",
    bloodType: "o+",
    physicalHistory: "23123123",
    image: "patient.png",
    job: "agricultor",
    corporationId: 1,
  },
];
const doctorValues = [
  { medicalRelation: "cardiologo", cieCod: 1, userId: 1 },
  { medicalRelation: "cirujano", cieCod: 1, userId: 2 },
  { medicalRelation: "cardiologo", cieCod: 1, userId: 3 },
  { medicalRelation: "cardiologo", cieCod: 1, userId: 4 },
];
const pharmacyValues = [{ corporationId: 1 }, { corporationId: 2 }];

const laboratoryValues = [{ corporationId: 1 }, { corporationId: 2 }];

const appointmentValues = [
  {
    corporationId: "1",
    documentNumber: "23123123123",
    firstName: "ronal",
    lastName: "larico",
    numberPhone: "12321321321",
    appointmentDate: "2022-12-26T17:32:19.420Z",
    doctorValue: "muy mal operacion",
    totalServices: 100.0,
    patientId: 1,
    documentIdentity: "23123123123",
    status: false,
    servicesDesc: "sin description",
    doctorId: 1,
  },
  {
    corporationId: "1",
    documentNumber: "8080080800",
    firstName: "joshy",
    lastName: "cruz",
    numberPhone: "12321321321",
    appointmentDate: "2022-12-26T17:32:19.420Z",
    doctorValue: "muy mal operacion",
    totalServices: 100.0,
    patientId: 1,
    documentIdentity: "8080080800",
    status: false,
    servicesDesc: "sin description",
    doctorId: 1,
  },
  {
    corporationId: "1",
    documentNumber: "28282828",
    firstName: "carla",
    lastName: "de la vega",
    numberPhone: "28282828",
    appointmentDate: "2022-12-26T17:32:19.420Z",
    doctorValue: "muy mal operacion",
    totalServices: 100.0,
    patientId: 1,
    documentIdentity: "3123213213",
    status: false,
    servicesDesc: "sin description",
    doctorId: 1,
  },
  {
    corporationId: "1",
    documentNumber: "73737373",
    firstName: "maria",
    lastName: "san miguel",
    numberPhone: "73737373",
    appointmentDate: "2022-12-26T17:32:19.420Z",
    doctorValue: "muy mal operacion",
    totalServices: 100.0,
    patientId: 1,
    documentIdentity: "3123213213",
    status: false,
    servicesDesc: "sin description",
    doctorId: 1,
  },
];

const servicesValues = [
  {
    name: "cirugia",
    price: 100.0,
    codInternal: 1,
    hasIgv: false,
    corporationId: 1,
  },
  {
    name: "radiologia",
    price: 100.0,
    codInternal: 2,
    hasIgv: false,
    corporationId: 1,
  },
  {
    name: "otros",
    price: 100.0,
    codInternal: 3,
    hasIgv: false,
    corporationId: 1,
  },
  {
    name: "dentista",
    price: 100.0,
    codInternal: 4,
    hasIgv: false,
    corporationId: 1,
  },
];

const medicalTestValues = [
  {
    observations: "no que que llenar xd",
    status: false,
    appointmentId: 1,
    doctorId: 1,
    laboratoryId: 1,
  },
  {
    observations: "no que que llenar xd",
    status: false,
    appointmentId: 2,
    doctorId: 2,
    laboratoryId: 1,
  },
  {
    observations: "no que que llenar xd",
    status: false,
    appointmentId: 3,
    doctorId: 3,
    laboratoryId: 1,
  },
  {
    observations: "no que que llenar xd",
    status: false,
    appointmentId: 4,
    doctorId: 4,
    laboratoryId: 1,
  },
];
const triageValues = [
  {
    weight: 12.3,
    height: 10.0,
    temperature: 35.0,
    heardRate: 123,
    bloodPressure: "mil*hora",
    daysSick: 32,
    sature: 12,
    observations: "moribundo",
    appointmentId: 1,
  },
  {
    weight: 12.3,
    height: 10.0,
    temperature: 35.0,
    heardRate: 123,
    bloodPressure: "mil*hora",
    daysSick: 32,
    sature: 12,
    observations: "moribundo",
    appointmentId: 2,
  },
  {
    weight: 12.3,
    height: 10.0,
    temperature: 35.0,
    heardRate: 123,
    bloodPressure: "mil*hora",
    daysSick: 32,
    sature: 12,
    observations: "moribundo",
    appointmentId: 3,
  },
  {
    weight: 12.3,
    height: 10.0,
    temperature: 35.0,
    heardRate: 123,
    bloodPressure: "mil*hora",
    daysSick: 32,
    sature: 12,
    observations: "moribundo",
    appointmentId: 4,
  },
];
const recipesValues = [
  {
    recipesDesc: "dasdas",
    observations: "dos pastillas por hora",
    appointmentId: 1,
    doctorId: 1,
  },
  {
    recipesDesc: "dasdas",
    observations: "dos pastillas por hora",
    appointmentId: 2,
    doctorId: 1,
  },
  {
    recipesDesc: "dasdas",
    observations: "dos pastillas por hora",
    appointmentId: 3,
    doctorId: 1,
  },
  {
    recipesDesc: "dasdas",
    observations: "dos pastillas por hora",
    appointmentId: 4,
    doctorId: 1,
  },
];
const testInfoValues = [
  { link: "link.com", name: "pacinete uno", medicalTestId: 1 },
  { link: "link.com", name: "pacinete dos", medicalTestId: 2 },
  { link: "link.com", name: "pacinete tres", medicalTestId: 3 },
  { link: "link.com", name: "pacinete cuatro", medicalTestId: 4 },
];
const receiptsValues = [
  { observations: "my mal,un pie a la tumba", appointmentId: 1 },
  { observations: "my mal,un pie a la tumbacita dos", appointmentId: 2 },
  { observations: "my mal,un pie a la tumba cita tres", appointmentId: 3 },
  {
    observations: "my mal,un pie a la tumba cita cuatro",
    appointmentId: 4,
  },
];
const diagnosticValues = [
  {
    anamnesis: "no se",
    clinicalExam: "san carlos",
    diagnostic: "cancer de higado",
    observations: "muy avanzado sadasd",
    appointmentId: 1,
    doctorId: 1,
  },
  {
    anamnesis: "no se",
    clinicalExam: "san carlos",
    diagnostic: "cancer de higado",
    observations: "muy avanzado sadasd",
    appointmentId: 2,
    doctorId: 1,
  },
  {
    anamnesis: "no se",
    clinicalExam: "san carlos",
    diagnostic: "cancer de higado",
    observations: "muy avanzado sadasd",
    appointmentId: 3,
    doctorId: 1,
  },
  {
    anamnesis: "no se",
    clinicalExam: "san carlos",
    diagnostic: "cancer de higado",
    observations: "muy avanzado sadasd",
    appointmentId: 4,
    doctorId: 1,
  },
];
const medicinesValues = [
  {
    name: "aspirina",
    description: "para dolor de cabeza",
    category: "pastilla",
    fullDescription: "para calmar el dolor",
    price: 12.0,
    codInternal: 1212,
    hasIgv: false,
    quantity: 2,
    corporationId: 1,
    pharmacyId: 1,
  },
  {
    name: "paracetamol",
    description: "para dolor de cabeza",
    category: "pastilla",
    fullDescription: "para calmar el dolor",
    price: 12.0,
    codInternal: 1213,
    hasIgv: false,
    quantity: 2,
    corporationId: 1,
    pharmacyId: 1,
  },
  {
    name: "penicilina",
    description: "para dolor de cabeza",
    category: "pastilla",
    fullDescription: "para calmar el dolor",
    price: 12.0,
    codInternal: 1214,
    hasIgv: false,
    quantity: 2,
    corporationId: 1,
    pharmacyId: 1,
  },
  {
    name: "panadlo",
    description: "para dolor de cabeza",
    category: "pastilla",
    fullDescription: "para calmar el dolor",
    price: 12.0,
    codInternal: 1215,
    hasIgv: false,
    quantity: 2,
    corporationId: 1,
    pharmacyId: 1,
  },
];
const seed = async () => {
  await prisma.corporation.createMany({
    data: corporationValues,
  });
  await prisma.user.createMany({
    data: userValues,
  });
  await prisma.profile.createMany({
    data: profileValues,
  });
  await prisma.patient.createMany({
    data: patientValues,
  });
  await prisma.laboratory.createMany({
    data: laboratoryValues,
  });
  await prisma.pharmacy.createMany({
    data: pharmacyValues,
  });
  await prisma.doctor.createMany({
    data: doctorValues,
  });
  await prisma.appointment.createMany({
    data: appointmentValues,
  });
  await prisma.services.createMany({
    data: servicesValues,
  });
  await prisma.medicalTest.createMany({
    data: medicalTestValues,
  });
  await prisma.triage.createMany({
    data: triageValues,
  });
  await prisma.recipes.createMany({
    data: recipesValues,
  });
  await prisma.testInfo.createMany({
    data: testInfoValues,
  });
  await prisma.receipts.createMany({
    data: receiptsValues,
  });
  await prisma.diagnostics.createMany({
    data: diagnosticValues,
  });
  await prisma.medicines.createMany({
    data: medicinesValues,
  });
};

seed();
