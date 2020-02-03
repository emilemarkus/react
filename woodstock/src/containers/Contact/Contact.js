import React, { Fragment } from 'react';
import './Contact.css';
import Inputtxt from '../../components/Form/Inputtxt'
import Textarea from '../../components/Form/Textarea'

const Contact = () => {
    return (
        <Fragment>
            <span class="titre">contact US</span>
            <form action="#" method="post">
                <div class="all-form">
                    <Inputtxt
                        labelizer="FIRST NAME"
                        placeholder="enter your first name here"
                        namer="firstname"
                        typer='text'
                    />
                    <Inputtxt
                        labelizer="LAST NAME"
                        placeholder="enter your last name here"
                        namer="lastname"
                        typer='text'
                    />
                     <Inputtxt
                        labelizer="YOUR MAIL"
                        placeholder="enter your mail addres here"
                        namer="lastname"
                        typer='text'
                    />
                    <p>
                    <Textarea 
                        labelizer="YOUR MESSAGE"
                    />
                    </p>
                </div>
            </form>
        </Fragment>
    )
}

export default Contact;