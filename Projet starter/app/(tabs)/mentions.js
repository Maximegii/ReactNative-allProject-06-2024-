import { Text, ScrollView, StyleSheet } from "react-native";


export default function MentionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Mentions legales de SAUVERDESVIES {"\n"}</Text>
      
      <Text style={styles.title2}>DROITS D'AUTEURS {"\n"}</Text>
      <Text>En application du Code français de la Propriété Intellectuelle et, plus généralement, des traités et accords internationaux comportant des dispositions relatives à la protection des droits d'auteurs, vous vous interdirez de reproduire pour un usage autre que privé mais aussi de vendre, distribuer, émettre, diffuser, adapter, modifier, publier, communiquer intégralement ou partiellement, sous quelque forme que ce soit, les données, la présentation ou l'organisation du site sans l'autorisation écrite préalable de Médecins Sans Frontières ©. {"\n"}</Text>
      <Text style={styles.title2}>LÉGISLATION FRANÇAISE ET RÉGLEMENTATION EUROPÉENNE RELATIVE AU TRAITEMENT DES DONNÉES PERSONNELLES {"\n"}</Text>
      <Text>Les informations recueillies sur ce site ou figurant dans l'espace donateurs MSF sont enregistrées dans un fichier informatisé par Médecins Sans Frontières. Elles sont destinées aux départements de la communication, de la collecte de dons et aux tiers mandatés par MSF à des fins de gestion interne, pour répondre à vos demandes ou faire appel à votre générosité. 
        Ces données peuvent faire l'objet d'un transfert à des tiers au sein de l'Union Européenne.  
        Dans le cadre d’un transfert vers un pays hors Union Européenne, des règles assurant la protection et la sécurité de ces données ont été mises en place. Le détail de ces règles et des informations relatives au transfert est disponible sur simple demande adressée à donateurs@paris.msf.org.
        Vos données sont conservées pendant la durée strictement nécessaire à la réalisation des finalités précitées et pour l’envoi de votre reçu fiscal.
        Conformément à la loi « informatique et libertés » et à la réglementation européenne, vous pouvez vous opposer à l’utilisation de vos données à caractère personnel auprès de MSF. Vous pouvez aussi introduire une réclamation auprès de la CNIL. 
        Vous bénéficiez d’un droit d’accès à vos données pour leur rectification, limitation, portabilité ou effacement, en contactant MSF à l’adresse ci-dessous. 
        Ces données peuvent faire l’objet d’un échange avec des partenaires scrupuleusement choisis. Si vous ne le souhaitez pas, vous pouvez vous y opposer en nous contactant à l’adresse ci-dessous.
        Pour nous contacter : MSF, Service donateurs, 14-34 avenue Jean Jaurès, 75019 Paris ou donateurs@paris.msf.org. {"\n"}</Text>
    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "start",
    marginLeft: 5,
    // alignItems: "start",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#900C3F",
  },
  title2: {
    fontSize: 21,
    fontWeight: "400",
    color: "#E05A90",
  }
});
