const Asamblea = require('../models/asambleaModel');
const Persona = require('../models/personaModel');
const Correo = require('../emailer')

const createAsamblea =  (req, res) =>{
    const {correo, date, description, type} = req.body;
//     const newAsamblea = new Asamblea({
//         persona,
//          fecha:date,
//          description,
//          tipo:type
//  });

    //Buscar a la persona segun el correo.

    try {
        Persona.find({correo:correo},async(err,persona)=>{
            if(err){
                return res.status(400)
            }
            if (!persona){
                return res.status(404).send({message: "Persona no encontrada"})
            }
            if (persona[0].role == "directiva") {
                const newAsamblea = new Asamblea({
                            usuario:persona[0],
                            date,
                            description,
                            type
                        }); 
              const asamblea = await newAsamblea.save()
              console.log(asamblea)
                res.status(200).send(asamblea)
            }
            // return res.status(401).send({message: "No tienes permisos para crear una asamblea"})

        })
        // Persona.findById(usuario, (err, persona) => {
        //     if(err){
        //         return res.status(400)
        //     }
        //     if (!persona){
        //         return res.status(404).send({message: "Persona no encontrada"})
        //     }
        //     if (persona.role == "directiva") {
        //         newAsamblea.save((err, asamblea) => {
        //             if(err){
        //                 return res.status(400)
        //             }else{
        //                 Correo.sendMail(fecha, tipo)
        //                 return res.status(200).send(asamblea)
        //             }
        //         })
        //     }
        // })
    } catch (error) {
        return res.status(401)
    }
}

const getAsambleas = (req, res) => {
    Asamblea.find({}, (err, asamblea) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea)
    })
}

const getSpecificAsamblea = (req, res) => {
    const {id} = req.params;

    Asamblea.findById(id).populate({ path: 'usuario'}).exec((err, asamblea) => {
        if(err){
            return res.status(400).send({ message: "Error al obtener la asamblea"})
        }
        if (!asamblea){
            return res.status(404).send({message: "asamblea no encontrada"})
        }
        return res.status(200).send(asamblea)
    })
}

const updateAsamblea = (req, res) => {
    console.log("id", id, "body", req.body)
    const {id} = req.params;

    Asamblea.findByIdAndUpdate(id, req.body, (err, asamblea) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea)
    })
}

const deleteAsamblea = (req, res) => {
    const {id} = req.params;

    Asamblea.findByIdAndDelete(id, (err, asamblea) => {
        if(err){
            return res.status(400)
        }
        return res.status(200).send(asamblea)
    })
}

module.exports = {
    createAsamblea,
    getAsambleas,
    getSpecificAsamblea,
    updateAsamblea,
    deleteAsamblea
}