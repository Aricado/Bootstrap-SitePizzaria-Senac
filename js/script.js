window.addEventListener('scroll', function () {
    const posicao = window.scrollY;
        //console.log(posicao);
    if (posicao > 100) {
        alfa = ((posicao>=300)?1:(posicao - 100) / 200); console.log(alfa);
        this.document.getElementById("navbar").slyle.backgroundcolor = "rgba(248, 249, 250, " + alfa + ")";
    }
    else {
        this.document.getElementById("navbar").style.backgroundcolor = "rgba(248, 249, 250, 0)";
    }
})
