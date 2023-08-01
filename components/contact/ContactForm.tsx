/* eslint-disable react-hooks/rules-of-hooks */
"use client"
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef, useState } from "react"
import axios from 'axios';
import emailjs from "@emailjs/browser";




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
    const [contacts, setContacts] = useState([])

    // useEffect(() => {
    //     fetchContacts();
    // }, []);


    // Les 2 fonctions ne peuvent pour l'instant pas donner de résultats car il n'y a pas d'API côté serveur
    // fonction pour venir récupérer les contacts 
    // const fetchContacts = () => {
    //     axios({
    //         method: 'GET',
    //         url: 'api/contacts',
    //     }).then((response) => {
    //         // on met à jour le state avec les nouvelles données reçues
    //         setContacts(response.data);
    //     }).catch((error) => {
    //         console.log('Error while getting the datas :', error);
    //     });
    // };

    // // fonction de soumission du formulaire
    // const handleSubmit = (e: { preventDefault: () => void; }) => {
    //     console.log('Sending')
    //     e.preventDefault();
    //     let data = {
    //         name,
    //         firstname,
    //         email,
    //         message
    //     }

    // axios({
    //     url:'api/contact',
    //     method: 'POST',
    //     data: {
    //         name: 'P-A',
    //         firstname: 'P-A',
    //         email: 'P-A',
    //         message: 'P-A',
    //     }
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
    // }).catch((error) => {
    //     console.log("Error while sending the request:", error);
    // })
    // }

    // Fonction pour envoyer des mails avec le package mail.js
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_4p2x22h", "template_i9unapo", e.target, "Zz8dV3rNB-P9vwckm")
        .then(
            (result) => {
                console.log(result.text)
                setSubmitted(true);
            },
            (error) => {
                console.log(error.text);
            }
        );
    }

    const resetForm = () => {
        setName(""),
        setFirstname(""),
        setEmail(""),
        setMessage(""),
        setSubmitted(false)
    };

    return (
        <section className="">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray" className="dark:text-white">
                    Prise de contact
                </Typography>
                <Typography color="gray" className="mt-1 font-normal dark:text-white">
                    Entrez vos coordonnées pour soumettre votre demande
                </Typography>
                <form onSubmit={sendEmail} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col space-y-4">
                        <Input 
                            size="lg" 
                            label="Nom" 
                            type="text" 
                            name="name" 
                            value={name}
                            onChange={(e)=> setName(e.target.value)} 
                            disabled={submitted}
                        />
                        <Input  
                            size="lg" 
                            label="Prénom" 
                            type="text" 
                            name="firstname" 
                            value={firstname}
                            onChange={(e)=>{setFirstname(e.target.value)}} 
                            disabled={submitted}
                        />
                        <textarea 
                            id="message"
                            // https://flowbite.com/docs/forms/textarea/#textarea-example
                            // modification personalisée du textarea pour le rendre responsive avec
                            //le bloc qui grandit en fonction du nombre de lignes
                            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
                            name="message" 
                            value={message}
                            placeholder="Votre message"
                            onChange={(e)=>{setMessage(e.target.value)}} 
                            disabled={submitted}
                        />
                        <Input 
                            size="lg" 
                            label="Email" 
                            type="mail" 
                            name="email" 
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            disabled={submitted}
                        />
                    </div>
                    <Button 
                        type="submit" 
                        className="mt-6" 
                        fullWidth
                        disabled={submitted}>
                        Envoyer
                    </Button>
                </form>
                {submitted && (
                    <Typography variant="h6" color="blue-gray" className="dark:text-white" >
                        Merci pour votre message !
                    </Typography>
                )}
            </Card>
        </section>
    );

}

export default ContactForm;