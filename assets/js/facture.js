

function calculFacture(){

    // var ref=document.getElementById('ref').value;
    // var designation=document.getElementById('designation').value;
    var prix1=document.getElementById('prix1').value;
    var prix2=document.getElementById('prix2').value;
    var prix3=document.getElementById('prix3').value;
    var prix4=document.getElementById('prix4').value;
    var prix5=document.getElementById('prix5').value;
    var prix6=document.getElementById('prix6').value;
    var prix7=document.getElementById('prix7').value;


    var qte1=document.getElementById('qte1').value;
    var qte2=document.getElementById('qte2').value;
    var qte3=document.getElementById('qte3').value;
    var qte4=document.getElementById('qte4').value;
    var qte5=document.getElementById('qte5').value;
    var qte6=document.getElementById('qte6').value;
    var qte7=document.getElementById('qte7').value;

    var brutht,rem,netcom,escompte,netfin,portfor,netht,tva,netpaie;
    var montant1,montant2,montant3,montant4,montant5,montant6,montant7;

    montant1 = prix1*qte1;
    montant2 = prix2*qte2;
    montant3 = prix3*qte3;
    montant4 = prix4*qte4;
    montant5 = prix5*qte5;
    montant6 = prix6*qte6;
    montant7 = prix7*qte7;
    
    

    brutht = qte1+qte2+qte3+qte4+qte5+qte6+qte7;

    rem = (brutht*5)/100;

    netcom = brutht - rem;

    escompte = (netcom * 2)/100;

    netfin = netcom - escompte;

    portfor = (brutht*7)/100;

    netht = brutht - (rem + escompte + portfor);

    tva = (netht*19)/100;

    netpaie = netht - tva;

    document.getElementById('montant1').innerHTML=montant1;
    document.getElementById('montant2').innerHTML=montant2;
    document.getElementById('montant3').innerHTML=montant3;
    document.getElementById('montant4').innerHTML=montant4;
    document.getElementById('montant5').innerHTML=montant5;
    document.getElementById('montant6').innerHTML=montant6;
    document.getElementById('montant7').innerHTML=montant7;

    document.getElementById('brutht').innerHTML=brutht;
    document.getElementById('rem').innerHTML=rem;
    document.getElementById('netcom').innerHTML=netcom;
    document.getElementById('escompte').innerHTML=escompte;
    document.getElementById('netfin').innerHTML=netfin;
    document.getElementById('portfor').innerHTML=portfor;
    document.getElementById('netht').innerHTML=netht;
    document.getElementById('tva').innerHTML=tva;
    document.getElementById('netpaie').innerHTML=netpaie;
}