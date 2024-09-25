import React from 'react'
import styles from '../index'

const Contact = () => {
    return (
        <section id='contact' className={`h-screen ${styles.flexStart} items-center flex-col justify-around ${styles.paddingX} ${styles.paddingY}`}>
            <h1 className={`${styles.heading2} text-center`}>Nous contacter</h1>
            <div className='flex flex-col items-center'>
                <span className={`${styles.paragraph} text-center`}>Créer un mail pro sur lequel on recevra tout les e-mail / questions que les gens auront
                    à poser.</span><br /><br />
                <span className={`${styles.paragraph} text-center`}>
                    Dans le mail merci de renseigner votre Nom votre Prénom et votre Identifiant
                </span><br />
                <span className={`${styles.paragraph} text-center`}>
                    Suite à cela veuillez nous expliquer le problème en essayant
                    d’être le plus claire possible. Suite a ca nous vous répondrons en
                    espérant que nos réponses vous conviennent et si ce n’est pas le
                    cas n’hésitez pas à renvoyer un mail au support. Vous pouvez
                    également mettre des photos dans le Mail cela pourrait nous
                    aider grandement.
                </span>
            </div>
        </section>
    )
}

export default Contact