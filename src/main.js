
var user = {
            "firstName" : "nassim",
            "lastName"  : "meziani",
            "jobTitle"  : "Consultant IT",
            "year"  : new Date().getFullYear()
           };

var skills = {
                "softSkills":
                [
                    {"skill" : "Créativité"},
                    {"skill" : "Esprit d’entreprendre"},
                    {"skill" : "Audace"},
                    {"skill" : "Motivation"},
                    {"skill" : "vision"},
                    {"skill" : "visualisation"},
                    {"skill" : "Résolution de problèmes"},
                    {"skill" : "confiance"},
                    {"skill" : "optimisme"},
                    {"skill" : "Intelligence émotionnelle"},
                    {"skill" : "Présence"},
                    {"skill" : "Sens du collectif"},
                    {"skill" : "Empathie"},
                    {"skill" : "Gestion du stress"}
                ],
                "backEnd":
                [
                    {"skill" : "PHP 7"},
                    {"skill" : "symfony 4"},
                    {"skill" : "JS"},
                    {"skill" : "node.JS"}

                ],
                "templating":
                [
                    {"skill" : "twig"}
                ],
                "frontEnd":
                [
                  {"skill" : "HTML 5"},
                  {"skill" : "CSS 3"},
                  {"skill" : "JS"}
                ],
                "library":
                [
                  {"skill" : "w3.css"},
                  {"skill" : "w3.js"},
                  {"skill" : "jQuery"},
                ],
                "frameWorks":
                [
                  {"skill" : "symfony 4"},
                  {"skill" : "express"},
                  {"skill" : "svelt"}
                ],
                "seo":
                [
                  {"skill" : "w3c standards"},
                  {"skill" : "google insight"},
                  {"skill" : "s.e.o audit"}
                ],
                "versionning":
                [
                  {"skill" : "git"},
                  {"skill" : "svn"}
                ],
                "ide":
                [
                  {"skill" : "xCode"},
                  {"skill" : "Android Studio"},
                  {"skill" : "Atom"}
                ],
                "ftp":
                [
                  {"skill" : "fileZilla"}
                ],
                "tasks":
                [
                  {"skill" : "installation linux"},
                  {"skill" : "migration linux"},
                  {"skill" : "installation windows x"},
                  {"skill" : "migration windows x"},
                  {"skill" : "mise à jour OS"},
                  {"skill" : "configuration accèes au CPD"},
                  {"skill" : "sauvegarde sur le CPD"},
                  {"skill" : "installation serveur voIp"},
                  {"skill" : "configuration client SIP"},
                  {"skill" : "intégration d'équipements dans le réseau"},
                  {"skill" : "installation de point d’accès wifi"},
                  {"skill" : "réalisation de schéma du réseau avec packet tracer"}
                ],
                "os":
                [
                  {"skill" : "iOS"},
                  {"skill" : "windows x"},
                  {"skill" : "linux"},
                  {"skill" : "android"},
                  {"skill" : "win server"},
                  {"skill" : "linux server"},
                  {"skill" : "Asterix voiIP server"}
                ],
                "divers":
                [
                  {"skill" : "packet tracer"},
                  {"skill" : "virtual machine"},
                  {"skill" : "fileZilla"},
                  {"skill" : "realVNC"},
                  {"skill" : "team viewer"},
                  {"skill" : "glpi"},
                  {"skill" : "Active Directory"},
                  {"skill" : "UO"},
                  {"skill" : "GPO"},
                  {"skill" : "DHCP"},
                  {"skill" : "DNS"},
                  {"skill" : "CPD"},
                  {"skill" : "WDS"},
                  {"skill" : "automatisation de tâches"}
                ],

};

async function myCallback()
{


  for (var skill in skills)
  {
    w3.displayObject(skill, skills);
  }

}

function displayTitle()
{

  //w3.displayObject("id01", user);
  displayData()

}

function displayData() 
{
  document.getElementById('id01').innerHTML=`<strong> <i class="w3-col w3-medium">CV ${user.year}</i>${user.jobTitle}</strong> `;

}

let title = new Promise(function(myResolve, myReject) 
{
 
  if (user) 
  {
    myResolve(user);
  } 
  else 
  {
    myReject("Error");
  }
});

title.then(
  function(value){displayData(user);},
  function(error){displayData(error);}
);