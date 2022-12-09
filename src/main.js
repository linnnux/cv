

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
  w3.displayObject("idPlayers", players);

}

let title = new Promise(function(myResolve, myReject)
{


});

title.then(
  function(value){displayData(user);},
  function(error){displayData(error);}
);
