"use client"
/* eslint-disable react/no-unescaped-entities */
import React from "react"


// import des modules Material Tailwind avec les éléments et le style du formulaire
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react"

function ContactForm () {
    return (
        <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
            Prise de contact
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
            Entrez vos coordonnées pour soumettre votre demande
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Nom" />
            <Input size="lg" label="Prénom" />
            <Input size="lg" label="Email" />
            </div>
            <Checkbox
            label={
                <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
                >
                    J'accepte les
                <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                >
                    &nbsp;conditions légales
                </a>
                </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth>
                Envoyer
            </Button>
      </form>
    </Card>
    );

}

export default ContactForm;