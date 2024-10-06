import React from 'react';
import styles from '../index';

const Contact = () => {
    return (
        <section id='contact' className={`h-screen ${styles.flexStart} items-center flex-col justify-around ${styles.paddingX} ${styles.paddingY}`}>
            <h1 className={`${styles.heading2} text-center`}>
                Nous contacter
            </h1>
            <div className='flex flex-col items-center w-full md:w-3/4 lg:w-2/3'>
                <p className={`${styles.paragraph} text-center sm:text-[18px] text-[16px] leading-relaxed`}>
                    Créer un mail pro sur lequel on recevra tous les e-mails / questions que les gens auront
                    à poser.
                </p>
                <br />
                <p className={`${styles.paragraph} text-center sm:text-[18px] text-[16px] leading-relaxed`}>
                    Dans le mail, merci de renseigner votre Nom, votre Prénom et votre Identifiant.
                </p>
                <br />
                <p className={`${styles.paragraph} text-center sm:text-[18px] text-[16px] leading-relaxed`}>
                    Suite à cela, veuillez nous expliquer le problème en essayant
                    d’être le plus clair possible. Suite à ça, nous vous répondrons en
                    espérant que nos réponses vous conviennent. Si ce n’est pas le
                    cas, n’hésitez pas à renvoyer un mail au support. Vous pouvez
                    également ajouter des photos dans le mail, cela pourrait nous
                    aider grandement.
                </p>
            </div>
        </section>
    );
}

export default Contact;
