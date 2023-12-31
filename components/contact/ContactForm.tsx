/* eslint-disable react-hooks/rules-of-hooks */
"use client"
/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { useState } from "react";


// import des modules Material Tailwind avec les éléments et le style du formulaire
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react"



function ContactForm () {
    // Les hooks d'état ci-dessous correspondent aux champs du formulaire et leur soumission
    const [name, setName] = useState("")
    const [firstname, setFirstname] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [submitted, setSubmitted] = useState(false)

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
                    <Button className="mt-6" fullWidth>
                        Envoyer
                    </Button>
                </form>
            </Card>
        </section>
    );

}

export default ContactForm;