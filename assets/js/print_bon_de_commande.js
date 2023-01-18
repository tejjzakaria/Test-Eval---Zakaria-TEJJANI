function myPrint(myfrm) {
    var printdata = document.getElementById(myfrm);
    newwin = window.open("");
    newwin.document.write(printdata.outerHTML);
    newwin.print();
    newwin.close();
}