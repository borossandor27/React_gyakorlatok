import 'AlgoritmusPage.css';

const AlgoritmusPage = () => {
    return (
        <div className="content">
            <h2>Algoritmusok</h2>
            <p>Az algoritmus egy adott probléma megoldására vagy feladat elvégzésére szolgáló, jól meghatározott, lépésről lépésre haladó utasítássorozat, amely logikai szabályokon alapul és véges számú lépésből áll. Ez egyfajta "recept", ami egyértelműen leírja, hogyan kell a bemeneti adatokból kimenetet előállítani. Számítógépes programoktól kezdve a főzési receptekig, sőt, a közösségi média hírfolyamok rangsorolásáig szinte mindenhol használatos. </p>
            <p>Főbb jellemzői:</p>
            <ul>
                <li>Végrehajthatóság: Minden lépésnek egyértelműnek és végrehajthatónak kell lennie.</li>
                <li>Véges: Az algoritmus végrehajtása véges számú lépésben be kell, hogy fejeződjön.</li>
                <li>Bemenet és kimenet: Az algoritmus bemeneti adatokat fogad és kimeneti eredményeket állít elő.</li>
                <li>Hatékonyság: Az algoritmusnak hatékonynak kell lennie, azaz minimális erőforrásokat (idő és memória) kell használnia a feladat elvégzéséhez.</li>
                <li>Pontosság: Az utasítások egyértelműek, nincs kétértelműség.</li>
                <li>Determinisztikus: Ugyanazokkal a bemenetekkel mindig ugyanazt az eredményt adja.</li>
            </ul>
            <p>Algoritmusok például a keresési algoritmusok (pl. bináris keresés), rendezési algoritmusok (pl. gyorsrendezés), grafikon algoritmusok (pl. Dijkstra algoritmus) és sok más területen alkalmazhatók.</p>
        </div>
    );
}

export default AlgoritmusPage;