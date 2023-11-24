const testList = [
    {
        "czynnik": "hałas ≤ 80dB ",
        "kod": "OHCC011 ",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "hałas ≥ 80dB ",
        "kod": "OHCC011 ",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "hałas ≥ 80dB ",
        "kod": "OHDP011",
        "badanie": "MP - audiometria"
    },
    {
        "czynnik": "hałas ultradźwiękowy",
        "kod": "OHCC011 ",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "hałas ultradźwiękowy (częstoliwości 0.5-8kHz)",
        "kod": "OHCC011 ",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "hałas ultradźwiękowy (częstoliwości 0.5-8kHz)",
        "kod": "OHDP011",
        "badanie": "MP - audiometria"
    },
    {
        "czynnik": "Drgania działające na organizm człowieka przezkończyny górne (drgania miejscowe)",
        "kod": "OHDP006",
        "badanie": "MP - próba oziębieniowa"
    },
    {
        "czynnik": "Drgania działające na organizm człowieka przezkończyny górne (drgania miejscowe)",
        "kod": "OHDP007",
        "badanie": "MP - próba uciskowa"
    },
    {
        "czynnik": "Drgania działające na organizm człowieka przezkończyny górne (drgania miejscowe)",
        "kod": "OHDP005",
        "badanie": "MP - palestezjometria - badanie progów czucia wibracji"
    },
    {
        "czynnik": "Drgania działające na organizm człowieka przezkończyny górne (drgania miejscowe)",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Drgania o ogólnymdziałaniu na organizmczłowieka (drgania ogólne)",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Promieniowanie jonizujące",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Promieniowanie jonizujące",
        "kod": "OHCC003 ",
        "badanie": "MP - konsultacja lekarza orzecznika - badanie okresowe"
    },
    {
        "czynnik": "Promieniowanie jonizujące",
        "kod": "OHLT021",
        "badanie": "MP - morfologia krwi obwodowej z rozmazem (pełnym różnicowaniem granulocytów)"
    },
    {
        "czynnik": "Promieniowanie jonizujące",
        "kod": "OHLT072",
        "badanie": "MP - retikulocyty"
    },
    {
        "czynnik": "Promieniowanie jonizujące",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Pola elektromagnetyczne",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Pola elektromagnetyczne",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Pola elektromagnetyczne",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Sztuczne promieniowa nieoptyczne (długość faliod 100 nm do 1 mm): nadfioletowe (UV)",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Sztuczne promieniowa nieoptyczne (długość faliod 100 nm do 1 mm): nadfioletowe (UV)",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Sztuczne promieniowanie optyczne (długość faliod 100 nm do 1 mm): podczerwone (IR)",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Sztuczne promieniowanie optyczne (długość faliod 100 nm do 1 mm): laserowe",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Sztuczne promieniowanie optyczne (długość faliod 100 nm do 1 mm): laserowe",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Sztuczne promieniowanie optyczne (długość faliod 100 nm do 1 mm): widzialne (światło)",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Sztuczne promieniowanie optyczne (długość faliod 100 nm do 1 mm): widzialne (światło)",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Mikroklimat gorący",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Mikroklimat gorący",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Mikroklimat gorący",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Mikroklimat gorący",
        "kod": "OHLT014",
        "badanie": "MP - glukoza"
    },
    {
        "czynnik": "Mikroklimat gorący",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Mikroklimat gorący",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Mikroklimat zimny",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Mikroklimat zimny",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Mikroklimat zimny",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Mikroklimat zimny",
        "kod": "OHLT014",
        "badanie": "MP - glukoza"
    },
    {
        "czynnik": "Mikroklimat zimny",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Mikroklimat zimny",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Pyły nieorganiczne zawierające krzemionkękrystaliczną",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pyły nieorganiczne zawierające krzemionkękrystaliczną",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Pyły węgla (kamiennego, brunatnego)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pyły węgla (kamiennego, brunatnego)",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Pyły grafitu (naturalnego, syntetycznego)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pyły grafitu (naturalnego, syntetycznego)",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Pyły nieorganicznezawierające włókna azbestu",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pyły nieorganicznezawierające włókna azbestu",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Pył talku",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pył talku",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Pył zawierający metale twarde (np. wolfram, kobalt)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pył zawierający metale twarde (np. wolfram, kobalt)",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Pył zawierający tworzywa sztuczne, w tym sztuczne włókna mineralne",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pył zawierający tworzywa sztuczne, w tym sztuczne włókna mineralne",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Pył organicznypochodzenia roślinnego lubzwierzęcego, z wyjątkiempyłów drewna oraz mąki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pył drewna",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pył drewna",
        "kod": "OHCC011 ",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Pył mąki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "akrylany",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "akrylany",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "akrylany",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "akrylany",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "akrylany",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "akrylany",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "akrylany",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "akrylowy (akrylaldehyd)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "formaldehyd",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Amoniak",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Arsen i jego związki",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "arsenowodór (arsan)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "arsenowodór (arsan)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "arsenowodór (arsan)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "arsenowodór (arsan)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "arsenowodór (arsan)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "arsenowodór (arsan)",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "arsenowodór (arsan)",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "arsenowodór (arsan)",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "arsenowodór (arsan)",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Azotu tlenki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Bar i jego związki:rozpuszczalne w wodzie",
        "kod": "OHLT025",
        "badanie": "MP - potas"
    },
    {
        "czynnik": "Bar i jego związki:rozpuszczalne w wodzie",
        "kod": "OHLT038",
        "badanie": "MP - wapń całkowity"
    },
    {
        "czynnik": "Bar i jego związki:rozpuszczalne w wodzie",
        "kod": "OHLT068",
        "badanie": "MP - kinaza fosfokreatynowa (CPK)"
    },
    {
        "czynnik": "Bar i jego związki:rozpuszczalne w wodzie",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Bar i jego związki:rozpuszczalne w wodzie",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Bar i jego związki:rozpuszczalne w wodzie",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Bar i jego związki: nierozpuszczalne w wodzie",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Benzen i jego homologi(ksylen, toluen)",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Benzen i jego homologi(ksylen, toluen)",
        "kod": "OHLT021",
        "badanie": "MP - morfologia krwi obwodowej z rozmazem (pełnym różnicowaniem granulocytów)"
    },
    {
        "czynnik": "Benzen i jego homologi(ksylen, toluen)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Benzen i jego homologi(ksylen, toluen)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Benzen i jego homologi(ksylen, toluen)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Benzen i jego homologi(ksylen, toluen)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Benzo[a]piren",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Benzo[a]piren",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Benzo[a]piren",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Brom i jego związki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Beryl i jego związki",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Beryl i jego związki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Beryl i jego związki",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Beryl i jego związki",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Beryl i jego związki",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Beryl i jego związki",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Chlor",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Chlor",
        "kod": "OHCC011 ",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "chlorowodór",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "chlorowodór",
        "kod": "OHCC011 ",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "tlenki chloru",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "tlenki chloru",
        "kod": "OHCC011 ",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Chrom i związki chromu (VI)",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Chrom i związki chromu (VI)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Chrom i związki chromu (VI)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Chrom i związki chromu (VI)",
        "kod": "OHLT043",
        "badanie": "MP - białko C - reaktywne (CRP)"
    },
    {
        "czynnik": "Chrom i związki chromu (VI)",
        "kod": "OHCC011 ",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Czteroetylek ołowiu(tetraetylek ołowiu)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Czteroetylek ołowiu(tetraetylek ołowiu)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Czteroetylek ołowiu(tetraetylek ołowiu)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Czteroetylek ołowiu(tetraetylek ołowiu)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Dwumetyloformamid(N,N-dimetyloformamid)",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Epichlorohydryna (1-chloro-2,3-epoksypropan)",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Epichlorohydryna (1-chloro-2,3-epoksypropan)",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Epichlorohydryna (1-chloro-2,3-epoksypropan)",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Epichlorohydryna (1-chloro-2,3-epoksypropan)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Fenol lub jego homologi(krezol, kreozot) oraz ich chlorowcopochodne lub nitropochodne",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Fenol lub jego homologi(krezol, kreozot) oraz ich chlorowcopochodne lub nitropochodne",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Fenol lub jego homologi(krezol, kreozot) oraz ich chlorowcopochodne lub nitropochodne",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Fenol lub jego homologi(krezol, kreozot) oraz ich chlorowcopochodne lub nitropochodne",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Fenol lub jego homologi(krezol, kreozot) oraz ich chlorowcopochodne lub nitropochodne",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Fenol lub jego homologi(krezol, kreozot) oraz ich chlorowcopochodne lub nitropochodne",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Fluor i fluorki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Fluor i fluorki",
        "kod": "OHXR005",
        "badanie": "MP - RTG stawu łokciowego"
    },
    {
        "czynnik": "Fluor i fluorki",
        "kod": "OHXR011",
        "badanie": "MP - RTG miednicy "
    },
    {
        "czynnik": "Fluor i fluorki po 10 latach",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Fluor i fluorki",
        "kod": "OHXR005",
        "badanie": "MP - RTG stawu łokciowego"
    },
    {
        "czynnik": "Fluor i fluorki",
        "kod": "OHXR011",
        "badanie": "MP - RTG miednicy "
    },
    {
        "czynnik": "Fluor i fluorki po 10 latach",
        "kod": "OHXR008",
        "badanie": "MP - RTG kręgosłupa lędźwiowego "
    },
    {
        "czynnik": "Fosfor biały, żółty (tertrafosfor)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Fosfor biały, żółty (tertrafosfor)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Fosfor biały, żółty (tertrafosfor)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Fosfor biały, żółty (tertrafosfor)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Fosfor biały, żółty (tertrafosfor)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Fosfor biały, żółty (tertrafosfor)",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Fosfor biały, żółty (tertrafosfor)",
        "kod": "OHLT038",
        "badanie": "MP - wapń całkowity"
    },
    {
        "czynnik": "Fosfor biały, żółty (tertrafosfor)",
        "kod": "OHLT063",
        "badanie": "MP - fosforan nieorganiczny"
    },
    {
        "czynnik": "Fosfor biały, żółty (tertrafosfor)",
        "kod": "OHLT043",
        "badanie": "MP - białko C - reaktywne (CRP)"
    },
    {
        "czynnik": "Fosforu związki chlorowe (np. trichlorek fosforu)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Fosforu związki chlorowe (np. trichlorek fosforu)",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Ftalowy bezwodnik",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Ftalowy bezwodnik",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Furfurol (2-furaldehyd)",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Glinu tlenek (tritlenek glinu)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Glikole: etylenowy, dietylenowy,butano-1,4-diol, glicerol",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Glikole: nitrowe pochodne glikoli lub gliceryny –nitrogliceryna (triazotan(V) glicerolu), nitroglikol(diazotan (V) glikoluetylenowego)",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Glikole: nitrowe pochodne glikoli lub gliceryny –nitrogliceryna (triazotan(V) glicerolu), nitroglikol(diazotan (V) glikoluetylenowego)",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Glikole: nitrowe pochodne glikoli lub gliceryny –nitrogliceryna (triazotan(V) glicerolu), nitroglikol(diazotan (V) glikoluetylenowego)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Izocyjanianowe związki",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Izocyjanianowe związki",
        "kod": "OHLT043",
        "badanie": "MP - białko C - reaktywne (CRP)"
    },
    {
        "czynnik": "Izocyjanianowe związki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Izocyjanianowe związki",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Kadm i jego związki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Kadm i jego związki",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Kadm i jego związki",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Kadm i jego związki",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Kadm i jego związki",
        "kod": "OHLT043",
        "badanie": "MP - białko C - reaktywne (CRP)"
    },
    {
        "czynnik": "Ketony: aceton",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Ketony: aceton",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Ketony: aceton",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Ketony: aceton",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Ketony: aceton",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Ketony: metyloetyloketon(butan-2-ol, MEK), metyloizobutyloketon (4-metylopentan-2-on, MIBU)",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Ketony: diaceton, tlenek mezytylu(4-metylopent-3-en-2-on)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Ketony: diaceton, tlenek mezytylu(4-metylopent-3-en-2-on)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Ketony: diaceton, tlenek mezytylu(4-metylopent-3-en-2-on)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Ketony: diaceton, tlenek mezytylu(4-metylopent-3-en-2-on)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Ketony: diaceton, tlenek mezytylu(4-metylopent-3-en-2-on)",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Ketony: diaceton, tlenek mezytylu(4-metylopent-3-en-2-on)",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Ketony: keton butylowo-etylowy (heptan-3-on, EBK)",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Ketony: keton dipropylowy(heptan-4-on, DPK)",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Kobalt",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Kobalt",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Kobalt",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Kobalt",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Mangan i jego związki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Mangan i jego związki",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Mangan i jego związki",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Mangan i jego związki",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Mangan i jego związki",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Mangan i jego związki",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Mangan i jego związki",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "benzyna ekstrakcyjna, nafta",
        "kod": "OHLT021",
        "badanie": "MP - morfologia krwi obwodowej z rozmazem (pełnym różnicowaniem granulocytów)"
    },
    {
        "czynnik": "mieszaniny zawierającewielopierścieniowe węglowodoryaromatyczne, np. pak, smoła, asfalty",
        "kod": "OHLT021",
        "badanie": "MP - morfologia krwi obwodowej z rozmazem (pełnym różnicowaniem granulocytów)"
    },
    {
        "czynnik": "mieszaniny zawierającewielopierścieniowe węglowodoryaromatyczne, np. pak, smoła, asfalty",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "mieszaniny zawierającewielopierścieniowe węglowodoryaromatyczne, np. pak, smoła, asfalty",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Naftalen i pochodne (naftol, dekalina(bicyklo[4.4.0]dekan), tetralina (1,2,3,4-tetrahydronaftalen))",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Naftalen i pochodne (naftol, dekalina(bicyklo[4.4.0]dekan), tetralina (1,2,3,4-tetrahydronaftalen))",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Naftalen i pochodne (naftol, dekalina(bicyklo[4.4.0]dekan), tetralina (1,2,3,4-tetrahydronaftalen))",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Naftalen i pochodne (naftol, dekalina(bicyklo[4.4.0]dekan), tetralina (1,2,3,4-tetrahydronaftalen))",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Naftalen i pochodne (naftol, dekalina(bicyklo[4.4.0]dekan), tetralina (1,2,3,4-tetrahydronaftalen))",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Naftalen i pochodne (naftol, dekalina(bicyklo[4.4.0]dekan), tetralina (1,2,3,4-tetrahydronaftalen))",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Naftalen i pochodne (naftol, dekalina(bicyklo[4.4.0]dekan), tetralina (1,2,3,4-tetrahydronaftalen))",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Nikiel i jego związki",
        "kod": "OHCC011 ",
        "badanie": " MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Nikiel i jego związki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Nikiel i jego związki",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Ołów i jego związki",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Ołów i jego związki",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Ołów i jego związki",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Ołów i jego związki",
        "kod": "OHLT023",
        "badanie": "MP - ołów (Pb)"
    },
    {
        "czynnik": "Pestycydy hamujące aktywność cholinesterazy: związki fosforoorganiczne,np. paration, malation,mefosfolan, sulfotep, dimetoat",
        "kod": "OHLT059",
        "badanie": "mp -cholinesteraza"
    },
    {
        "czynnik": "Pestycydy: hamujące aktywność cholinesterazy karbaminiany, np. aldikarb, karbaryl",
        "kod": "OHLT059",
        "badanie": "mp -cholinesteraza"
    },
    {
        "czynnik": "Węglowodory chlorowane:związki dichlorodifenyloetanu, np. metoksychlor, metiochlor, związki chlorowanebenzenu, np. lindan, cykloheksanon",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Węglowodory chlorowane:związki dichlorodifenyloetanu, np. metoksychlor, metiochlor, związki chlorowanebenzenu, np. lindan, cykloheksanon",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Węglowodory chlorowane:związki dichlorodifenyloetanu, np. metoksychlor, metiochlor, związki chlorowanebenzenu, np. lindan, cykloheksanon",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Węglowodory chlorowane:związki dichlorodifenyloetanu, np. metoksychlor, metiochlor, związki chlorowanebenzenu, np. lindan, cykloheksanon",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Węglowodory chlorowane:chlorowane cyklodieny np. aldrin, dieldrin",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Węglowodory chlorowane:chlorowane cyklodieny np. aldrin, dieldrin",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Węglowodory chlorowane:chlorowane cyklodieny np. aldrin, dieldrin",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Węglowodory chlorowane:chlorowane cyklodieny np. aldrin, dieldrin",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Węglowodory chlorowane:chlorowane cyklodieny np. aldrin, dieldrin",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Związki kwasu dichlorofenoksyoctowego, np. dichlorprop, mekoprop",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Związki kwasu dichlorofenoksyoctowego, np. dichlorprop, mekoprop",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Związki kwasu dichlorofenoksyoctowego, np. dichlorprop, mekoprop",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Związki kwasu dichlorofenoksyoctowego, np. dichlorprop, mekoprop",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Związki kwasu dichlorofenoksyoctowego, np. dichlorprop, mekoprop",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Związki kwasu dichlorofenoksyoctowego, np. dichlorprop, mekoprop",
        "kod": "OHLT014",
        "badanie": "MP - glukoza"
    },
    {
        "czynnik": "Pestycydyditiokarbaminianowe, np. maneb, zineb,etylenotiomocznik(ETU) i propylenotiomocznik(PTU), np. chloroksuron, linuron",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Pestycydyditiokarbaminianowe, np. maneb, zineb,etylenotiomocznik(ETU) i propylenotiomocznik(PTU), np. chloroksuron, linuron",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Pestycydyditiokarbaminianowe, np. maneb, zineb,etylenotiomocznik(ETU) i propylenotiomocznik(PTU), np. chloroksuron, linuron",
        "kod": "OHLT018",
        "badanie": "MP - hormon tyreotropowy (TSH)"
    },
    {
        "czynnik": "Pestycydyditiokarbaminianowe, np. maneb, zineb,etylenotiomocznik(ETU) i propylenotiomocznik(PTU), np. chloroksuron, linuron",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Pestycydyditiokarbaminianowe, np. maneb, zineb,etylenotiomocznik(ETU) i propylenotiomocznik(PTU), np. chloroksuron, linuron",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Pestycydyditiokarbaminianowe, np. maneb, zineb,etylenotiomocznik(ETU) i propylenotiomocznik(PTU), np. chloroksuron, linuron",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Pestycydyditiokarbaminianowe, np. maneb, zineb,etylenotiomocznik(ETU) i propylenotiomocznik(PTU), np. chloroksuron, linuron",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Związki dipirydylowe, np. parakwat, dikwat",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHLT014",
        "badanie": "MP - glukoza"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Pyretroidy, np. aletryna, cypermetryna, dekametryna, permetryna",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Pirydyna",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Pirydyna",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Pirydyna",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Pirydyna",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Rtęć metaliczna i jej związki nieorganiczne",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Rtęć metaliczna i jej związki nieorganiczne",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Rtęć metaliczna i jej związki nieorganiczne",
        "kod": "OHLT073",
        "badanie": "MP - rtęć (Hg) w moczu"
    },
    {
        "czynnik": "Rtęć związki organiczne",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Rtęć związki organiczne",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Rtęć związki organiczne",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Rtęć związki organiczne",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Rtęć związki organiczne",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Rtęć związki organiczne",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Rtęć związki organiczne",
        "kod": "OHLT073",
        "badanie": "MP - rtęć (Hg) w moczu"
    },
    {
        "czynnik": "Rtęć związki organiczne",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Rtęć związki organiczne",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Siarkowodór (sulfan)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Siarki tlenki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Siarki tlenki",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Terpentyna",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Terpentyna",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Terpentyna",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Wanad i jego związki",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Wanad i jego związki",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHLT014",
        "badanie": "MP - glukoza"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Węgla disiarczek",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Tlenek węgla (II)",
        "kod": "OHCC001 ",
        "badanie": "MP - konsultacja lekarza orzecznika"
    },
    {
        "czynnik": "Tlenek węgla (II)",
        "kod": "OHCC005 ",
        "badanie": "MP  -konsultacja lekarza orzecznika – badania wstępne"
    },
    {
        "czynnik": "Tlenek węgla (II)",
        "kod": "OHCC002 ",
        "badanie": "MP - konsultacja lekarza orzecznika - badanie kontrolne"
    },
    {
        "czynnik": "Tlenek węgla (II)",
        "kod": "OHCC003 ",
        "badanie": "MP - konsultacja lekarza orzecznika - badanie okresowe"
    },
    {
        "czynnik": "Tlenek węgla (II)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Tlenek węgla (II)",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Tlenek węgla (II)",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Tlenek węgla (IV)",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Tlenek węgla (IV)",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "związki aminowe (metyloamina,dimetyloamina, dietylenoamina)i diaminowe (etylenodiamina, tetrametylenodiamina)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "związki nitrowe (nitrometan, nitroetan, nitropropan)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "związki nitrowe (nitrometan, nitroetan, nitropropan)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "związki nitrowe (nitrometan, nitroetan, nitropropan)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "związki nitrowe (nitrometan, nitroetan, nitropropan)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "chlorowcopochodne węglowodorów alifatycznych lub alicyklicznych",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "chlorowcopochodne węglowodorów alifatycznych lub alicyklicznych",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "chlorowcopochodne węglowodorów alifatycznych lub alicyklicznych",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "chlorowcopochodne węglowodorów alifatycznych lub alicyklicznych",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Chlorek metylu (chlorometan)",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Chlorek metylu (chlorometan)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Chlorek metylu (chlorometan)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Chlorek metylu (chlorometan)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Chlorek metylu (chlorometan)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Bromek metylu (bromometan)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Bromek metylu (bromometan)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Bromek metylu (bromometan)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Bromek metylu (bromometan)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Chlorek metylenu (dichlorometan)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Chlorek metylenu (dichlorometan)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Chlorek metylenu (dichlorometan)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Chlorek metylenu (dichlorometan)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Chlorek metylenu (dichlorometan)",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Chlorek metylenu (dichlorometan)",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Chloroform (trichlorometan)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Chloroform (trichlorometan)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Chloroform (trichlorometan)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Chloroform (trichlorometan)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Chloroform (trichlorometan)",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Chloroform (trichlorometan)",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Dichloroetan, trichloroetan",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Dichloroetan, trichloroetan",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Dichloroetan, trichloroetan",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Dichloroetan, trichloroetan",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Czterochlorek węgla (1,1,2,2-tetrachlorometan, TETRA)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Czterochlorek węgla (1,1,2,2-tetrachlorometan, TETRA)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Czterochlorek węgla (1,1,2,2-tetrachlorometan, TETRA)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Czterochlorek węgla (1,1,2,2-tetrachlorometan, TETRA)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Czterochlorek węgla (1,1,2,2-tetrachlorometan, TETRA)",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Czterochlorek węgla (1,1,2,2-tetrachlorometan, TETRA)",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "związki nitrowe, np. nitrobenzen, dinitrobenzen, dinitrotoluen,trinitrotoluen",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "związki nitrowe, np. nitrobenzen, dinitrobenzen, dinitrotoluen,trinitrotoluen",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "związki nitrowe, np. nitrobenzen, dinitrobenzen, dinitrotoluen,trinitrotoluen",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "związki nitrowe, np. nitrobenzen, dinitrobenzen, dinitrotoluen,trinitrotoluen",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "związki nitrowe, np. nitrobenzen, dinitrobenzen, dinitrotoluen,trinitrotoluen",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "związki nitrowe, np. nitrobenzen, dinitrobenzen, dinitrotoluen,trinitrotoluen",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "związki aminowe, np. anilina, benzydyna, betanaftyloamina(2-naftyloamina)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "związki aminowe, np. anilina, benzydyna, betanaftyloamina(2-naftyloamina)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "związki aminowe, np. anilina, benzydyna, betanaftyloamina(2-naftyloamina)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "związki aminowe, np. anilina, benzydyna, betanaftyloamina(2-naftyloamina)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "związki aminowe, np. anilina, benzydyna, betanaftyloamina(2-naftyloamina)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "związki aminowe, np. anilina, benzydyna, betanaftyloamina(2-naftyloamina)",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "chlorowcopochodne:– pochodne benzenu (chlorobenzen, dichlorobenzen, heksachlorobenzen)",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "chlorowcopochodne:– pochodne benzenu (chlorobenzen, dichlorobenzen, heksachlorobenzen)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "chlorowcopochodne:– pochodne benzenu (chlorobenzen, dichlorobenzen, heksachlorobenzen)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "chlorowcopochodne:– pochodne benzenu (chlorobenzen, dichlorobenzen, heksachlorobenzen)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "chlorowcopochodne:– pochodne benzenu (chlorobenzen, dichlorobenzen, heksachlorobenzen)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "chlorowcopochodne:– pochodne benzenu (chlorobenzen, dichlorobenzen, heksachlorobenzen)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "pochodne bifenyli (bifenyl)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "pochodne bifenyli (bifenyl)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "pochodne bifenyli (bifenyl)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "pochodne bifenyli (bifenyl)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "pochodne bifenyli (bifenyl)",
        "kod": "OHLT009",
        "badanie": "MP - cholesterol"
    },
    {
        "czynnik": "pochodne bifenyli (bifenyl)",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "pochodne bifenyli (bifenyl)",
        "kod": "OHLT010",
        "badanie": "MP - cholesterol HDL"
    },
    {
        "czynnik": "pochodne bifenyli (bifenyl)",
        "kod": "OHLT011",
        "badanie": "MP - cholesterol LDL"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT009",
        "badanie": "MP - cholesterol"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT010",
        "badanie": "MP - cholesterol HDL"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT011",
        "badanie": "MP - cholesterol LDL"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT044",
        "badanie": "MP - bilirubina całkowita"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "pochodne naftalenu",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Winylobenzen (styren)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Winylobenzen (styren)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Winylobenzen (styren)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Winylobenzen (styren)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Winylobenzen (styren)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Winylobenzen (styren)",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Winylu chlorek (chloroetan)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Winylu chlorek (chloroetan)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Winylu chlorek (chloroetan)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Winylu chlorek (chloroetan)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Winylu chlorek (chloroetan)",
        "kod": "OHLT064",
        "badanie": "MP - fosfotaza alkaliczna (ALP)"
    },
    {
        "czynnik": "Winylu chlorek (chloroetan)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Winylu chlorek (chloroetan)",
        "kod": "OHDP006",
        "badanie": "MP - próba oziębieniowa"
    },
    {
        "czynnik": "Żywice epoksydowe",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Mieszaniny rozpuszczalników organicznych (jeżeli są zawarte wymienione powyżej rozpuszczalniki,obowiązuje zakresprzypisany do danego związku)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Mieszaniny rozpuszczalników organicznych (jeżeli są zawarte wymienione powyżej rozpuszczalniki,obowiązuje zakresprzypisany do danego związku)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Mieszaniny rozpuszczalników organicznych (jeżeli są zawarte wymienione powyżej rozpuszczalniki,obowiązuje zakresprzypisany do danego związku)",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Mieszaniny rozpuszczalników organicznych (jeżeli są zawarte wymienione powyżej rozpuszczalniki,obowiązuje zakresprzypisany do danego związku)",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Mieszaniny rozpuszczalników organicznych (jeżeli są zawarte wymienione powyżej rozpuszczalniki,obowiązuje zakresprzypisany do danego związku)",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Cytostatyki",
        "kod": "OHLT020",
        "badanie": "MP - morfologia krwi obwodowej bez rozmazu"
    },
    {
        "czynnik": "Cytostatyki",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Cytostatyki",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Cytostatyki",
        "kod": "OHLT026",
        "badanie": "MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP)"
    },
    {
        "czynnik": "Cytostatyki",
        "kod": "OHLT050",
        "badanie": "MP - GGTP- gamma glutamylotransferaza"
    },
    {
        "czynnik": "Cytostatyki",
        "kod": "OHLT052",
        "badanie": "MP - kreatynina"
    },
    {
        "czynnik": "Cytostatyki",
        "kod": "OHLT007",
        "badanie": "MP - badanie ogólne moczu"
    },
    {
        "czynnik": "Wirus zapalenia wątroby – typ B (HBV)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Wirus zapalenia wątroby – typ B (HBV)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Wirus zapalenia wątroby – typ B (HBV)",
        "kod": "OHLT074",
        "badanie": "MP - przeciwciała anty-HBc-total (całkowite) "
    },
    {
        "czynnik": "Wirus zapalenia wątroby – typ C (HCV)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Wirus zapalenia wątroby – typ C (HCV)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Wirus zapalenia wątroby – typ C (HCV)",
        "kod": "OHLT031",
        "badanie": "MP - przeciwciała p. HCV (anty-HCV)"
    },
    {
        "czynnik": "Ludzki wirus niedoboru odporności nabytej (HIV)",
        "kod": "OHLT002",
        "badanie": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT)"
    },
    {
        "czynnik": "Ludzki wirus niedoboru odporności nabytej (HIV)",
        "kod": "OHLT001",
        "badanie": "MP - aminotransferaza alaninowa (ALT,ALAT,GPT)"
    },
    {
        "czynnik": "Ludzki wirus niedoboru odporności nabytej (HIV)",
        "kod": "OHLT032",
        "badanie": "MP - przeciwciała p. HIV1/HIV2"
    },
    {
        "czynnik": "Pałeczki Brucella abortus bovis",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Promieniowce termofilne, grzyby pleśniowe, w tymo działaniu uczulającym",
        "kod": "OHDP012",
        "badanie": "MP - spirometria"
    },
    {
        "czynnik": "Prątek gruźlicy",
        "kod": "OHXR004",
        "badanie": "MP - RTG klatki piersiowej"
    },
    {
        "czynnik": "Niekorzystne czynniki psychospołeczne",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "Niekorzystne czynniki psychospołeczne",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Niekorzystne czynniki psychospołeczne",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "praca pod presją czasu",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "praca pod presją czasu",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "praca pod presją czasu",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "stres zawodowy",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "stres zawodowy",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "stres zawodowy",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "obciążenie psychiczne",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "obciążenie psychiczne",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "obciążenie psychiczne",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "zagrożenia wynikające ze stałego dużego dopływu informacji i gotowości do odpowiedzi",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "zagrożenia wynikające ze stałego dużego dopływu informacji i gotowości do odpowiedzi",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "zagrożenia wynikające ze stałego dużego dopływu informacji i gotowości do odpowiedzi",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "zagrożenia wynikające z pracy na stanowiskach decyzyjnych i związanych z odpowiedzialnością",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "zagrożenia wynikające z pracy na stanowiskach decyzyjnych i związanych z odpowiedzialnością",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "zagrożenia wynikające z pracy na stanowiskach decyzyjnych i związanych z odpowiedzialnością",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "zagrożenia wynikające z narażania życia",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "zagrożenia wynikające z narażania życia",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "zagrożenia wynikające z narażania życia",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "zagrożenia wynikające z monotonii pracy",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "zagrożenia wynikające z monotonii pracy",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "zagrożenia wynikające z monotonii pracy",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "zagrożenia wynikające z organizacji pracy(praca pod presją czasu, nierównomierne obciążenie pracą, inne)",
        "kod": "OHLT019",
        "badanie": "MP - lipidogram"
    },
    {
        "czynnik": "zagrożenia wynikające z organizacji pracy(praca pod presją czasu, nierównomierne obciążenie pracą, inne)",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "zagrożenia wynikające z organizacji pracy(praca pod presją czasu, nierównomierne obciążenie pracą, inne)",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Praca związana z obsługą narzędzi, maszyn, urządzeń poruszających się poza drogami publicznymi pojazdów mechanicznych (takich jak wózki widłowe, koparkoładowarki itp.)",
        "kod": "OHCC011",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Praca związana z obsługą narzędzi, maszyn, urządzeń poruszających się poza drogami publicznymi pojazdów mechanicznych (takich jak wózki widłowe, koparkoładowarki itp.)",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Praca związana z obsługą narzędzi, maszyn, urządzeń poruszających się poza drogami publicznymi pojazdów mechanicznych (takich jak wózki widłowe, koparkoładowarki itp.)",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Praca związana z obsługą narzędzi, maszyn, urządzeń poruszających się poza drogami publicznymi pojazdów mechanicznych (takich jak wózki widłowe, koparkoładowarki itp.)",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Praca związana z obsługą narzędzi, maszyn, urządzeń poruszających się poza drogami publicznymi pojazdów mechanicznych (takich jak wózki widłowe, koparkoładowarki itp.)",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Praca związana z obsługą narzędzi, maszyn, urządzeń poruszających się poza drogami publicznymi pojazdów mechanicznych (takich jak wózki widłowe, koparkoładowarki itp.)",
        "kod": "OHPT003",
        "badanie": "MP - badania psychotechniczne - obsługa maszyn"
    },
    {
        "czynnik": "Praca związana z obsługą narzędzi, maszyn, urządzeń poruszających się poza drogami publicznymi pojazdów mechanicznych (takich jak wózki widłowe, koparkoładowarki itp.)",
        "kod": "OHPT007",
        "badanie": "MP- badanie pscyhotechniczne - kierowanie wózkiem widłowym"
    },
    {
        "czynnik": "Obsługa maszyn w ruchu ",
        "kod": "OHCC011",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa maszyn w ruchu ",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa maszyn w ruchu ",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa maszyn w ruchu ",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Obsługa maszyn w ruchu ",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Obsługa maszyn w ruchu ",
        "kod": "OHPT003",
        "badanie": "MP - badania psychotechniczne - obsługa maszyn"
    },
    {
        "czynnik": "Obsługa wózka jezdniowego - wysokość podnoszenia ponad 0,5 m",
        "kod": "OHCC011",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa wózka jezdniowego - wysokość podnoszenia ponad 0,5 m",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa wózka jezdniowego - wysokość podnoszenia ponad 0,5 m",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa wózka jezdniowego - wysokość podnoszenia ponad 0,5 m",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Obsługa wózka jezdniowego - wysokość podnoszenia ponad 0,5 m",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Obsługa wózka jezdniowego - wysokość podnoszenia ponad 0,5 m",
        "kod": "OHPT002",
        "badanie": "MP - badania psychotechniczne - kierowanie pojazdami"
    },
    {
        "czynnik": "Obsługa wózka widłowego",
        "kod": "OHCC011",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa wózka widłowego",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa wózka widłowego",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa wózka widłowego",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Obsługa wózka widłowego",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Obsługa wózka widłowego",
        "kod": "OHPT007",
        "badanie": "MP- badanie pscyhotechniczne - kierowanie wózkiem widłowym"
    },
    {
        "czynnik": "Kierowanie podestem ruchomym ",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Kierowanie wózkiem jezdniowym elekrycznym - wysokość podnoszenia do 0,5 m",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Operator suwnicy ",
        "kod": "OHCC011",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Operator suwnicy ",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Operator suwnicy ",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Operator suwnicy ",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Operator suwnicy ",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Operator suwnicy ",
        "kod": "OHPT003",
        "badanie": "MP - badania psychotechniczne - obsługa maszyn"
    },
    {
        "czynnik": "Kierowanie wózkiem widłowym, podnośnikowym jezdniowym z mechanicznym napędem podnoszenia",
        "kod": "OHCC011",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Kierowanie wózkiem widłowym, podnośnikowym jezdniowym z mechanicznym napędem podnoszenia",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Kierowanie wózkiem widłowym, podnośnikowym jezdniowym z mechanicznym napędem podnoszenia",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Kierowanie wózkiem widłowym, podnośnikowym jezdniowym z mechanicznym napędem podnoszenia",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Kierowanie wózkiem widłowym, podnośnikowym jezdniowym z mechanicznym napędem podnoszenia",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Kierowanie wózkiem widłowym, podnośnikowym jezdniowym z mechanicznym napędem podnoszenia",
        "kod": "OHPT007",
        "badanie": "MP- badanie pscyhotechniczne - kierowanie wózkiem widłowym"
    },
    {
        "czynnik": "Obsługa monitorów ekranowych",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Obsługa monitorów ekranowych",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Praca na wysokości",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Praca na wysokości",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Praca na wysokości",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Praca na wysokości",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Praca na wysokości",
        "kod": "OHLT014",
        "badanie": "MP - glukoza"
    },
    {
        "czynnik": "Praca zmianowa, w tym praca w porze nocnej",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Praca fizyczna z wydatkiemenergetycznym na pracę powyżej 1500 kcal (8 godzin lub 3 kcal/min) dla mężczyzn i powyżej1000 kcal (8 godzin lub ponad 2 kcal/min) dla kobiet",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Praca fizyczna z wydatkiemenergetycznym na pracę powyżej 1500 kcal (8 godzin lub 3 kcal/min) dla mężczyzn i powyżej1000 kcal (8 godzin lub ponad 2 kcal/min) dla kobiet",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Dźwiganie ciężarów",
        "kod": "OHDP008",
        "badanie": "MP - EKG  z opisem"
    },
    {
        "czynnik": "Dźwiganie ciężarów",
        "kod": "OHDP009",
        "badanie": "MP - EKG bez opisu"
    },
    {
        "czynnik": "Praca w wymuszonej pozycji",
        "kod": "",
        "badanie": ""
    },
    {
        "czynnik": "Praca wymagająca stałego i nadmiernego wysiłku głosowego",
        "kod": "OHCC011",
        "badanie": "MP - Laryngolog konsultacja lekarska"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat b",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat b",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat b",
        "kod": "OHPT005",
        "badanie": "MP - badania psychotechniczne - widzenie zmierzchowe, zjawisko olśnienia"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat b",
        "kod": "OHPT006",
        "badanie": "MP - widzenie zmierzchowe i zjawisko olśnienia "
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat b",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat b",
        "kod": "OHLT014",
        "badanie": "MP - glukoza"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat b",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami, szkoleniemi egzaminowaniem kierowców",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami, szkoleniemi egzaminowaniem kierowców",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami, szkoleniemi egzaminowaniem kierowców",
        "kod": "OHPT005",
        "badanie": "MP - badania psychotechniczne - widzenie zmierzchowe, zjawisko olśnienia"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami, szkoleniemi egzaminowaniem kierowców",
        "kod": "OHPT006",
        "badanie": "MP - widzenie zmierzchowe i zjawisko olśnienia "
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami, szkoleniemi egzaminowaniem kierowców",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami, szkoleniemi egzaminowaniem kierowców",
        "kod": "OHLT014",
        "badanie": "MP - glukoza"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami, szkoleniemi egzaminowaniem kierowców",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat. C, D, E (kierowca zawodowy)",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat. C, D, E (kierowca zawodowy)",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat. C, D, E (kierowca zawodowy)",
        "kod": "OHDP019",
        "badanie": "MP - badanie ostrości widzenia"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat. C, D, E (kierowca zawodowy)",
        "kod": "OHLT014",
        "badanie": "MP - glukoza"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat. C, D, E (kierowca zawodowy)",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat. C, D, E (kierowca zawodowy)",
        "kod": "OHPT008",
        "badanie": "MP - badanie psychotechniczne - kierowcy zawodowi"
    },
    {
        "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat. C, D, E (kierowca zawodowy)",
        "kod": "OHCC034",
        "badanie": "MP - wydanie orzeczenia do wydziału komunikacji"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną",
        "kod": "OHCC035",
        "badanie": "MP - wydanie orzeczenia lekarskiego pozwolenia na broń"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną",
        "kod": "OHPT001",
        "badanie": "MP - badania psychotechniczne - broń"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną",
        "kod": "OHCC020",
        "badanie": "MP - konsultacja psychologiczna - pozwolenie na broń"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną",
        "kod": "OHCC017",
        "badanie": "MP - Psychiatra konsultacja lekarska"
    },
    {
        "czynnik": "Kontakt z żywnością ",
        "kod": "OHCC004",
        "badanie": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne"
    },
    {
        "czynnik": "Badanie sanitarne w kierunku zakażeń lub chorób zakaźnych przenoszonych drogą pokarmową ",
        "kod": "OHCC004",
        "badanie": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne"
    },
    {
        "czynnik": "Badanie sanitarne w kierunku zakażeń lub chorób zakaźnych przenoszonych drogą oddechową",
        "kod": "OHCC004",
        "badanie": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne"
    },
    {
        "czynnik": "Wykonywanie czynności przy których istnieje możliwość przeniesienia zakażenia na inne osoby",
        "kod": "OHCC004",
        "badanie": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne"
    },
    {
        "czynnik": "czynniki biologiczne przenoszone drogą powietrzno-kropelkową ( np. Wirus grypy, prątki gruźlicy, opryszczki, ospy wietrznej) ",
        "kod": "OHCC004",
        "badanie": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne"
    },
    {
        "czynnik": "wytwarzanie i obrót materiałami wybuchowymi, bronią i amunicją oraz wyrobami o  przeznaczeniu wojskowym lub policyjnym ",
        "kod": "OHCC017",
        "badanie": "MP - Psychiatra konsultacja lekarska"
    },
    {
        "czynnik": "",
        "kod": "OHCC019",
        "badanie": "MP - konsultacja psychologiczna "
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej ",
        "kod": "OHCC012",
        "badanie": "MP - Neurolog konsultacja lekarska"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej ",
        "kod": "OHCC013",
        "badanie": "MP - Okulista konsultacja lekarska"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej ",
        "kod": "OHLT008",
        "badanie": "MP - badanie pola widzenia (perymetria)"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej ",
        "kod": "OHCC035",
        "badanie": "MP - wydanie orzeczenia lekarskiego pozwolenia na broń"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej ",
        "kod": "OHPT001",
        "badanie": "MP - badania psychotechniczne - broń"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej ",
        "kod": "OHCC020",
        "badanie": "MP - konsultacja psychologiczna - pozwolenie na broń"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej ",
        "kod": "OHCC039",
        "badanie": "MP - badanie psychologiczne i wydanie orzeczenia dla kwalifikowanych pracowników ochrony"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej ",
        "kod": "OHCC017",
        "badanie": "MP - Psychiatra konsultacja lekarska"
    },
    {
        "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej ",
        "kod": "OHCC040",
        "badanie": "MP - badanie i wydanie orzeczenia dla kwalifikowanych pracowników ochrony"
    },
    {
        "czynnik": "Prace wymagające sprawności psychoruchowej - zdolność psychiczna i fizyczna do pracy na stanowisku kwalifikowanego pracownika zabezpieczenia technicznego",
        "kod": "OHPT009",
        "badanie": "MP- badanie psychologiczne dla pracownika zabezpieczenia technicznego"
    },
    {
        "czynnik": "Prace wymagające sprawności psychoruchowej - zdolność psychiczna i fizyczna do pracy na stanowisku kwalifikowanego pracownika zabezpieczenia technicznego",
        "kod": "OHCC048",
        "badanie": "MP- wydanie orzeczenia dla pracownika zabezpieczenia technicznego"
    },
    {
        "czynnik": "Test widzenia z bliska i widzenia barw na wymóg normy PN-EN ISO 9712",
        "kod": "OHDP020",
        "badanie": "MP - badanie okulistyczne wzroku według skali Jaegera"
    },
    {
        "czynnik": "Obsługa urządzeń transportu bliskiego (UTB)",
        "kod": "",
        "badanie": ""
    }
]

const input = document.querySelector('#input');
const output = document.querySelector('#output');
const outputContainer = document.querySelector('.output-container');

function searchTests() {
  const searchString = input.value.toLowerCase();
  const uniqueTests = new Set();

  const searchIndex = testList.filter(test => {
    const isMatch = test.czynnik.toLowerCase().includes(searchString);
    if (isMatch) {
      uniqueTests.add(`${test.badanie} - ${test.kod}`);
    }
    return isMatch;
  });

  // Display the results
  if (searchIndex.length > 0) {
    output.innerHTML = Array.from(uniqueTests).join('<br>');
    outputContainer.style.display = "block";
  } else {
    output.innerHTML = "Nie znaleziono wyników.";
  }

  if (searchString === '') {
    output.innerHTML = "";
    outputContainer.style.display = "none";
  }
}

input.addEventListener('input', searchTests);