/* eslint-disable react-hooks/rules-of-hooks */
"use client"
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { useState } from "react";
import axios from 'axios';



// import des modules Material Tailwind avec les éléments et le style du formulaire
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react"
import { error } from "console";



const ContactForm = () => {

    // Les hooks d'état ci-dessous correspondent aux champs du formulaire et leur soumission
    const [name, setName] = useState("")
    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)

    // fonction de soumission du formulaire
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        console.log('Sending')
        e.preventDefault();
        let data = {
            name,
            firstname,
            email,
            message
        }

    //On appelle l'URL 'api/contact' que l'on viendra récupérer plus tard
    // axios('api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     },
    //     // body: JSON.stringify(data)
    // }).then((response) => {
    //     console.log('Response received')
    //     // on passe la soumission à true si le status de la requête est à 200 -> OK
    //     if (response.status === 200) {
    //         // on affiche un messsage de succès
    //         console.log('Response succeeded')
    //         setSubmitted(true)
    //         setName("")
    //         setFirstname("")
    //         setEmail("")
    //         setMessage("")
    //     }
    // })
    axios({
        url:'api/contact',
        method: 'POST',
        data: {
            name: 'P-A',
            firstname: 'P-A',
            email: 'P-A',
            message: 'P-A',
        }
    }).then((response) => {
        console.log('Response received')
        // on passe la soumission à true si le status de la requête est à 200 -> OK
        if (response.status === 200) {
            // on affiche un messsage de succès
            console.log('Response succeeded')
            setSubmitted(true)
            setName("")
            setFirstname("")
            setEmail("")
            setMessage("")
        }
    }).catch((error) => {
        console.log("Error while sending the request:", error);
    })
    }


    return (
        <section className="">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Prise de contact
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Entrez vos coordonnées pour soumettre votre demande
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col space-y-4">
                        <Input size="lg" label="Nom" type="text" name="nom" onChange={(e)=>{setName(e.target.value)}} />
                        <Input size="lg" label="Prénom" type="text" name="prenom" onChange={(e)=>{setFirstname(e.target.value)}} />
                        <Input size="lg" className="h-auto mb-4 md:mb-0" label="Message" type="textarea" name="message" onChange={(e)=>{setMessage(e.target.value)}} />
                        <Input size="lg" label="Email" type="mail" name="mail" onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <Button 
                        type="submit" 
                        className="mt-6" 
                        // On appelle notre fonction handleSubmit au clic 'OnClick' du bouton envoyer
                        onClick={(e) =>{handleSubmit(e)}}
                        fullWidth>
                        Envoyer
                    </Button>
                </form>
            </Card>
        </section>
    );

}

export default ContactForm;