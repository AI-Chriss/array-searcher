const testList = [
  {
      "czynnik": "hałas ≤ 80dB",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011)"
  },
  {
      "czynnik": "hałas ≥ 80dB",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011), MP - audiometria (OHDP011)"
  },
  {
      "czynnik": "hałas ultradźwiękowy",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011)"
  },
  {
      "czynnik": "hałas ultradźwiękowy (częstoliwości 0.5-8kHz)",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011), MP - audiometria (OHDP011)"
  },
  {
      "czynnik": "Drgania działające na organizm człowieka przezkończyny górne (drgania miejscowe)",
      "badania": "MP - próba oziębieniowa (OHDP006), MP - próba uciskowa (OHDP007), MP - palestezjometria - badanie progów czucia wibracji (OHDP005), MP - Neurolog konsultacja lekarska (OHCC012)"
  },
  {
      "czynnik": "Promieniowanie jonizujące",
      "badania": "MP - badanie ostrości widzenia (OHDP019), MP - konsultacja lekarza orzecznika - badanie okresowe (OHCC003), MP - morfologia krwi obwodowej z rozmazem (pełnym różnicowaniem granulocytów) (OHLT021), MP - retikulocyty (OHLT072), MP - Okulista konsultacja lekarska (OHCC013)"
  },
  {
      "czynnik": "Pola elektromagnetyczne",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "Sztuczne promieniowa nieoptyczne (długość faliod 100 nm do 1 mm): nadfioletowe (UV)",
      "badania": "MP - badanie ostrości widzenia (OHDP019), MP - Okulista konsultacja lekarska (OHCC013)"
  },
  {
      "czynnik": "Sztuczne promieniowanie optyczne (długość faliod 100 nm do 1 mm): podczerwone (IR)",
      "badania": "MP - Okulista konsultacja lekarska (OHCC013)"
  },
  {
      "czynnik": "Sztuczne promieniowanie optyczne (długość faliod 100 nm do 1 mm): laserowe",
      "badania": "MP - badanie ostrości widzenia (OHDP019), MP - Okulista konsultacja lekarska (OHCC013)"
  },
  {
      "czynnik": "Sztuczne promieniowanie optyczne (długość faliod 100 nm do 1 mm): widzialne (światło)",
      "badania": "MP - Okulista konsultacja lekarska (OHCC013), MP - badanie ostrości widzenia (OHDP019)"
  },
  {
      "czynnik": "Mikroklimat gorący",
      "badania": "MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009), MP - spirometria (OHDP012), MP - glukoza (OHLT014), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Mikroklimat zimny",
      "badania": "MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009), MP - spirometria (OHDP012), MP - glukoza (OHLT014), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Pyły nieorganiczne zawierające krzemionkę krystaliczną",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Pyły węgla (kamiennego brunatnego)",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Pyły grafitu (naturalnego syntetycznego)",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Pyły nieorganiczne zawierające włókna azbestu",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Pył talku",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Pył zawierający metale twarde (np. wolfram kobalt)",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Pył zawierający tworzywa sztuczne w tym sztuczne włókna mineralne",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Pył organicznypochodzenia roślinnego lubzwierzęcego, z wyjątkiempyłów drewna oraz mąki",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Pył drewna",
      "badania": "MP - spirometria (OHDP012), MP - Laryngolog konsultacja lekarska (OHCC011)"
  },
  {
      "czynnik": "Pył mąki",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "akrylany",
      "badania": "MP - spirometria (OHDP012), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "akrylowy (akrylaldehyd)",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "formaldehyd",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Amoniak",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Arsen i jego związki",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "arsenowodór (arsan)",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "Azotu tlenki",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Bar i jego związki:rozpuszczalne w wodzie",
      "badania": "MP - potas (OHLT025), MP - wapń całkowity (OHLT038), MP - kinaza fosfokreatynowa (CPK) (OHLT068), MP - badanie ogólne moczu (OHLT007), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "Bar i jego związki: nierozpuszczalne w wodzie",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Benzen i jego homologi(ksylen, toluen)",
      "badania": "MP - Neurolog konsultacja lekarska (OHCC012), MP - morfologia krwi obwodowej z rozmazem (pełnym różnicowaniem granulocytów) (OHLT021), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Benzo[a]piren",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - badanie ogólne moczu (OHLT007), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Brom i jego związki",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Beryl i jego związki",
      "badania": "MP - RTG klatki piersiowej (OHXR004), MP - spirometria (OHDP012), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Chlor",
      "badania": "MP - spirometria (OHDP012), MP - Laryngolog konsultacja lekarska (OHCC011)"
  },
  {
      "czynnik": "chlorowodór",
      "badania": "MP - spirometria (OHDP012), MP - Laryngolog konsultacja lekarska (OHCC011)"
  },
  {
      "czynnik": "tlenki chloru",
      "badania": "MP - spirometria (OHDP012), MP - Laryngolog konsultacja lekarska (OHCC011)"
  },
  {
      "czynnik": "Chrom i związki chromu (VI)",
      "badania": "MP - RTG klatki piersiowej (OHXR004), MP - spirometria (OHDP012), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - białko C - reaktywne (CRP) (OHLT043), MP - Laryngolog konsultacja lekarska (OHCC011)"
  },
  {
      "czynnik": "Czteroetylek ołowiu(tetraetylek ołowiu)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Dwumetyloformamid(N,N-dimetyloformamid)",
      "badania": " ()"
  },
  {
      "czynnik": "Epichlorohydryna (1-chloro-2,3-epoksypropan)",
      "badania": "MP - badanie ogólne moczu (OHLT007), MP - kreatynina (OHLT052), MP - RTG klatki piersiowej (OHXR004), MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Fenol lub jego homologi(krezol, kreozot) oraz ich chlorowcopochodne lub nitropochodne",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Fluor i fluorki",
      "badania": "MP - spirometria (OHDP012), MP - RTG stawu łokciowego (OHXR005), MP - RTG miednicy (OHXR011), MP - RTG stawu łokciowego (OHXR005), MP - RTG miednicy (OHXR011)"
  },
  {
      "czynnik": "Fluor i fluorki po 10 latach",
      "badania": "MP - spirometria (OHDP012), MP - RTG kręgosłupa lędźwiowego (OHXR008)"
  },
  {
      "czynnik": "Fosfor biały, żółty (tertrafosfor)",
      "badania": "MP - spirometria (OHDP012), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - badanie ogólne moczu (OHLT007), MP - wapń całkowity (OHLT038), MP - fosforan nieorganiczny (OHLT063), MP - białko C - reaktywne (CRP) (OHLT043)"
  },
  {
      "czynnik": "Fosforu związki chlorowe (np. trichlorek fosforu)",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Ftalowy bezwodnik",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Furfurol (2-furaldehyd)",
      "badania": " ()"
  },
  {
      "czynnik": "Glinu tlenek (tritlenek glinu)",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Glikole: etylenowy, dietylenowy,butano-1,4-diol, glicerol",
      "badania": "MP - kreatynina (OHLT052)"
  },
  {
      "czynnik": "Glikole: nitrowe pochodne glikoli lub gliceryny –nitrogliceryna (triazotan(V) glicerolu), nitroglikol(diazotan (V) glikoluetylenowego)",
      "badania": "MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009), MP - morfologia krwi obwodowej bez rozmazu (OHLT020)"
  },
  {
      "czynnik": "Izocyjanianowe związki",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - białko C - reaktywne (CRP) (OHLT043), MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Kadm i jego związki",
      "badania": "MP - spirometria (OHDP012), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - badanie ogólne moczu (OHLT007), MP - kreatynina (OHLT052), MP - białko C - reaktywne (CRP) (OHLT043)"
  },
  {
      "czynnik": "Ketony: aceton",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Ketony: metyloetyloketon(butan-2-ol, MEK), metyloizobutyloketon (4-metylopentan-2-on, MIBU)",
      "badania": " ()"
  },
  {
      "czynnik": "Ketony: diaceton, tlenek mezytylu(4-metylopent-3-en-2-on)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Kobalt",
      "badania": "MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009), MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Mangan i jego związki",
      "badania": "MP - spirometria (OHDP012), MP - badanie ogólne moczu (OHLT007), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "benzyna ekstrakcyjna, nafta",
      "badania": "MP - morfologia krwi obwodowej z rozmazem (pełnym różnicowaniem granulocytów) (OHLT021)"
  },
  {
      "czynnik": "mieszaniny zawierającewielopierścieniowe węglowodoryaromatyczne, np. pak, smoła, asfalty",
      "badania": "MP - morfologia krwi obwodowej z rozmazem (pełnym różnicowaniem granulocytów) (OHLT021), MP - badanie ogólne moczu (OHLT007), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Naftalen i pochodne (naftol, dekalina(bicyklo[4.4.0]dekan), tetralina (1,2,3,4-tetrahydronaftalen))",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Nikiel i jego związki",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011), MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Ołów i jego związki",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007), MP - ołów (Pb) (OHLT023)"
  },
  {
      "czynnik": "Pestycydy hamujące aktywność cholinesterazy: związki fosforoorganiczne,np. paration, malation,mefosfolan, sulfotep, dimetoat",
      "badania": "mp -cholinesteraza (OHLT059)"
  },
  {
      "czynnik": "Pestycydy: hamujące aktywność cholinesterazy karbaminiany, np. aldikarb, karbaryl",
      "badania": "mp -cholinesteraza (OHLT059)"
  },
  {
      "czynnik": "Węglowodory chlorowane - związki dichlorodifenyloetanu, np. metoksychlor, metiochlor, związki chlorowanebenzenu, np. lindan, cykloheksanon",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Węglowodory chlorowane - chlorowane cyklodieny np. aldrin, dieldrin",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - morfologia krwi obwodowej bez rozmazu (OHLT020)"
  },
  {
      "czynnik": "Związki kwasu dichlorofenoksyoctowego, np. dichlorprop, mekoprop",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - glukoza (OHLT014)"
  },
  {
      "czynnik": "Pestycydyditiokarbaminianowe, np. maneb, zineb,etylenotiomocznik(ETU) i propylenotiomocznik(PTU), np. chloroksuron, linuron",
      "badania": "MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009), MP - hormon tyreotropowy (TSH) (OHLT018), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Związki dipirydylowe, np. parakwat, dikwat",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Dinitroalkilofenole, np. dinoseb, dinokap",
      "badania": "MP - badanie ostrości widzenia (OHDP019), MP - Okulista konsultacja lekarska (OHCC013), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - glukoza (OHLT014), MP - kreatynina (OHLT052), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Pyretroidy, np. aletryna, cypermetryna, dekametryna, permetryna",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Pirydyna",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Rtęć metaliczna i jej związki nieorganiczne",
      "badania": "MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007), MP - rtęć (Hg) w moczu (OHLT073)"
  },
  {
      "czynnik": "Rtęć związki organiczne",
      "badania": "MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - rtęć (Hg) w moczu (OHLT073), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie ostrości widzenia (OHDP019)"
  },
  {
      "czynnik": "Siarkowodór (sulfan)",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Siarki tlenki",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Terpentyna",
      "badania": "MP - badanie ogólne moczu (OHLT007), MP - kreatynina (OHLT052), MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Wanad i jego związki",
      "badania": "MP - spirometria (OHDP012), MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Węgla disiarczek",
      "badania": "MP - Okulista konsultacja lekarska (OHCC013), MP - badanie ostrości widzenia (OHDP019), MP - glukoza (OHLT014), MP - lipidogram (OHLT019), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "Tlenek węgla (II)",
      "badania": "MP - konsultacja lekarza orzecznika (OHCC001), MP  -konsultacja lekarza orzecznika – badania wstępne (OHCC005), MP - konsultacja lekarza orzecznika - badanie kontrolne (OHCC002), MP - konsultacja lekarza orzecznika - badanie okresowe (OHCC003), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "Tlenek węgla (IV)",
      "badania": "MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "związki aminowe (metyloamina,dimetyloamina, dietylenoamina)i diaminowe (etylenodiamina, tetrametylenodiamina)",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "związki nitrowe (nitrometan, nitroetan, nitropropan)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "chlorowcopochodne węglowodorów alifatycznych lub alicyklicznych",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Chlorek metylu (chlorometan)",
      "badania": "MP - Neurolog konsultacja lekarska (OHCC012), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Bromek metylu (bromometan)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Chlorek metylenu (dichlorometan)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Chloroform (trichlorometan)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Dichloroetan, trichloroetan",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "Czterochlorek węgla (1,1,2,2-tetrachlorometan, TETRA)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Dibromek etylenu, trichloroetylen (TRI), tetrachloroetylen (PER)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "związki nitrowe, np. nitrobenzen, dinitrobenzen, dinitrotoluen,trinitrotoluen",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - kreatynina (OHLT052)"
  },
  {
      "czynnik": "związki aminowe, np. anilina, benzydyna, betanaftyloamina(2-naftyloamina)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "chlorowcopochodne:– pochodne benzenu (chlorobenzen, dichlorobenzen, heksachlorobenzen)",
      "badania": "MP - Neurolog konsultacja lekarska (OHCC012), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050)"
  },
  {
      "czynnik": "pochodne bifenyli (bifenyl)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - cholesterol (OHLT009), MP - lipidogram (OHLT019), MP - cholesterol HDL (OHLT010), MP - cholesterol LDL (OHLT011)"
  },
  {
      "czynnik": "pochodne naftalenu",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - cholesterol (OHLT009), MP - lipidogram (OHLT019), MP - cholesterol HDL (OHLT010), MP - cholesterol LDL (OHLT011), MP - bilirubina całkowita (OHLT044), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Winylobenzen (styren)",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Winylu chlorek (chloroetan)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - fosfotaza alkaliczna (ALP) (OHLT064), MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - próba oziębieniowa (OHDP006)"
  },
  {
      "czynnik": "Żywice epoksydowe",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Mieszaniny rozpuszczalników organicznych (jeżeli są zawarte wymienione powyżej rozpuszczalniki,obowiązuje zakresprzypisany do danego związku)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT, AST, ALP, BIL, GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - morfologia krwi obwodowej bez rozmazu (OHLT020)"
  },
  {
      "czynnik": "Cytostatyki",
      "badania": "MP - morfologia krwi obwodowej bez rozmazu (OHLT020), MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - próby wątrobowe (ALT AST ALP BIL GGTP) (OHLT026), MP - GGTP- gamma glutamylotransferaza (OHLT050), MP - kreatynina (OHLT052), MP - badanie ogólne moczu (OHLT007)"
  },
  {
      "czynnik": "Wirus zapalenia wątroby – typ B (HBV)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - przeciwciała anty-HBc-total (całkowite) (OHLT074)"
  },
  {
      "czynnik": "Wirus zapalenia wątroby – typ C (HCV)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - przeciwciała p. HCV (anty-HCV) (OHLT031)"
  },
  {
      "czynnik": "Ludzki wirus niedoboru odporności nabytej (HIV)",
      "badania": "MP - aminotransferaza asparaginianowa (AspAT,AST,GOT) (OHLT002), MP - aminotransferaza alaninowa (ALT,ALAT,GPT) (OHLT001), MP - przeciwciała p. HIV1/HIV2 (OHLT032)"
  },
  {
      "czynnik": "Pałeczki Brucella abortus bovis",
      "badania": "Brak wskazania we wskazówkach metodycznych"
  },
  {
      "czynnik": "Promieniowce termofilne, grzyby pleśniowe, w tymo działaniu uczulającym",
      "badania": "MP - spirometria (OHDP012)"
  },
  {
      "czynnik": "Prątek gruźlicy",
      "badania": "MP - RTG klatki piersiowej (OHXR004)"
  },
  {
      "czynnik": "Niekorzystne czynniki psychospołeczne",
      "badania": "MP - lipidogram (OHLT019), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "praca pod presją czasu",
      "badania": "MP - lipidogram (OHLT019), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "stres zawodowy",
      "badania": "MP - lipidogram (OHLT019), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "obciążenie psychiczne",
      "badania": "MP - lipidogram (OHLT019), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "zagrożenia wynikające ze stałego dużego dopływu informacji i gotowości do odpowiedzi",
      "badania": "MP - lipidogram (OHLT019), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "zagrożenia wynikające z pracy na stanowiskach decyzyjnych i związanych z odpowiedzialnością",
      "badania": "MP - lipidogram (OHLT019), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "zagrożenia wynikające z narażania życia",
      "badania": "MP - lipidogram (OHLT019), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "zagrożenia wynikające z monotonii pracy",
      "badania": "MP - lipidogram (OHLT019), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "zagrożenia wynikające z organizacji pracy(praca pod presją czasu, nierównomierne obciążenie pracą, inne)",
      "badania": "MP - lipidogram (OHLT019), MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "Praca związana z obsługą narzędzi, maszyn, urządzeń poruszających się poza drogami publicznymi pojazdów mechanicznych (takich jak wózki widłowe, koparkoładowarki itp.)",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011), MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie pola widzenia (perymetria) (OHLT008), MP - badanie ostrości widzenia (OHDP019), MP - badania psychotechniczne - obsługa maszyn (OHPT003), MP- badanie pscyhotechniczne - kierowanie wózkiem widłowym (OHPT007)"
  },
  {
      "czynnik": "Obsługa maszyn w ruchu",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011), MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie pola widzenia (perymetria) (OHLT008), MP - badanie ostrości widzenia (OHDP019), MP - badania psychotechniczne - obsługa maszyn (OHPT003)"
  },
  {
      "czynnik": "Obsługa wózka jezdniowego - wysokość podnoszenia ponad 0,5 m",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011), MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie pola widzenia (perymetria) (OHLT008), MP - badanie ostrości widzenia (OHDP019), MP - badania psychotechniczne - kierowanie pojazdami (OHPT002)"
  },
  {
      "czynnik": "Obsługa wózka widłowego",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011), MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie pola widzenia (perymetria) (OHLT008), MP - badanie ostrości widzenia (OHDP019), MP- badanie pscyhotechniczne - kierowanie wózkiem widłowym (OHPT007)"
  },
  {
      "czynnik": "Kierowanie podestem ruchomym",
      "badania": "Brak wskazania we wskazówkach metodycznych"
  },
  {
      "czynnik": "Kierowanie wózkiem jezdniowym elekrycznym - wysokość podnoszenia do 0,5 m",
      "badania": "Brak wskazania we wskazówkach metodycznych"
  },
  {
      "czynnik": "Operator suwnicy",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011), MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie pola widzenia (perymetria) (OHLT008), MP - badanie ostrości widzenia (OHDP019), MP - badania psychotechniczne - obsługa maszyn (OHPT003)"
  },
  {
      "czynnik": "Kierowanie wózkiem widłowym, podnośnikowym jezdniowym z mechanicznym napędem podnoszenia",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011), MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie pola widzenia (perymetria) (OHLT008), MP - badanie ostrości widzenia (OHDP019), MP- badanie pscyhotechniczne - kierowanie wózkiem widłowym (OHPT007)"
  },
  {
      "czynnik": "Obsługa monitorów ekranowych",
      "badania": "MP - Okulista konsultacja lekarska (OHCC013), MP - badanie ostrości widzenia (OHDP019)"
  },
  {
      "czynnik": "Praca na wysokości",
      "badania": "MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie pola widzenia (perymetria) (OHLT008), MP - badanie ostrości widzenia (OHDP019), MP - glukoza (OHLT014)"
  },
  {
      "czynnik": "Praca zmianowa, w tym praca w porze nocnej",
      "badania": "Brak wskazania we wskazówkach metodycznych"
  },
  {
      "czynnik": "Praca fizyczna z wydatkiemenergetycznym na pracę powyżej 1500 kcal (8 godzin lub 3 kcal/min) dla mężczyzn i powyżej1000 kcal (8 godzin lub ponad 2 kcal/min) dla kobiet",
      "badania": "MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "Dźwiganie ciężarów",
      "badania": "MP - EKG  z opisem (OHDP008), MP - EKG bez opisu (OHDP009)"
  },
  {
      "czynnik": "Praca w wymuszonej pozycji",
      "badania": "Brak wskazania we wskazówkach metodycznych"
  },
  {
      "czynnik": "Praca wymagająca stałego i nadmiernego wysiłku głosowego",
      "badania": "MP - Laryngolog konsultacja lekarska (OHCC011)"
  },
  {
      "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat b",
      "badania": "MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badania psychotechniczne - widzenie zmierzchowe, zjawisko olśnienia (OHPT005), MP - widzenie zmierzchowe i zjawisko olśnienia (OHPT006), MP - badanie ostrości widzenia (OHDP019), MP - glukoza (OHLT014), MP - badanie pola widzenia (perymetria) (OHLT008)"
  },
  {
      "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami, szkoleniemi egzaminowaniem kierowców",
      "badania": "MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badania psychotechniczne - widzenie zmierzchowe, zjawisko olśnienia (OHPT005), MP - widzenie zmierzchowe i zjawisko olśnienia (OHPT006), MP - badanie ostrości widzenia (OHDP019), MP - glukoza (OHLT014), MP - badanie pola widzenia (perymetria) (OHLT008)"
  },
  {
      "czynnik": "Praca na stanowiskach związanych z kierowaniem pojazdami kat. C, D, E (kierowca zawodowy)",
      "badania": "MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie ostrości widzenia (OHDP019), MP - glukoza (OHLT014), MP - badanie pola widzenia (perymetria) (OHLT008), MP - badanie psychotechniczne - kierowcy zawodowi (OHPT008), MP - wydanie orzeczenia do wydziału komunikacji (OHCC034)"
  },
  {
      "czynnik": "Praca związana z posługiwaniem się bronią palną",
      "badania": "MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie pola widzenia (perymetria) (OHLT008), MP - wydanie orzeczenia lekarskiego pozwolenia na broń (OHCC035), MP - badania psychotechniczne - broń (OHPT001), MP - konsultacja psychologiczna - pozwolenie na broń (OHCC020), MP - Psychiatra konsultacja lekarska (OHCC017)"
  },
  {
      "czynnik": "Kontakt z żywnością",
      "badania": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne (OHCC004)"
  },
  {
      "czynnik": "Badanie sanitarne w kierunku zakażeń lub chorób zakaźnych przenoszonych drogą pokarmową",
      "badania": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne (OHCC004)"
  },
  {
      "czynnik": "Badanie sanitarne w kierunku zakażeń lub chorób zakaźnych przenoszonych drogą oddechową",
      "badania": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne (OHCC004)"
  },
  {
      "czynnik": "Wykonywanie czynności przy których istnieje możliwość przeniesienia zakażenia na inne osoby",
      "badania": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne (OHCC004)"
  },
  {
      "czynnik": "czynniki biologiczne przenoszone drogą powietrzno-kropelkową ( np. Wirus grypy, prątki gruźlicy, opryszczki, ospy wietrznej)",
      "badania": "MP - konsultacja lekarza orzecznika - badanie sanitarno epidemiologiczne (OHCC004)"
  },
  {
      "czynnik": "wytwarzanie i obrót materiałami wybuchowymi, bronią i amunicją oraz wyrobami o  przeznaczeniu wojskowym lub policyjnym",
      "badania": "MP - Psychiatra konsultacja lekarska (OHCC017)"
  },
  {
      "czynnik": "Praca związana z posługiwaniem się bronią palną - pracownik ochrony fizycznej",
      "badania": "MP - Neurolog konsultacja lekarska (OHCC012), MP - Okulista konsultacja lekarska (OHCC013), MP - badanie pola widzenia (perymetria) (OHLT008), MP - wydanie orzeczenia lekarskiego pozwolenia na broń (OHCC035), MP - badania psychotechniczne - broń (OHPT001), MP - konsultacja psychologiczna - pozwolenie na broń (OHCC020), MP - badanie psychologiczne i wydanie orzeczenia dla kwalifikowanych pracowników ochrony (OHCC039), MP - Psychiatra konsultacja lekarska (OHCC017), MP - badanie i wydanie orzeczenia dla kwalifikowanych pracowników ochrony (OHCC040)"
  },
  {
      "czynnik": "Prace wymagające sprawności psychoruchowej - zdolność psychiczna i fizyczna do pracy na stanowisku kwalifikowanego pracownika zabezpieczenia technicznego",
      "badania": "MP- badanie psychologiczne dla pracownika zabezpieczenia technicznego (OHPT009), MP- wydanie orzeczenia dla pracownika zabezpieczenia technicznego (OHCC048)"
  },
  {
      "czynnik": "Test widzenia z bliska i widzenia barw na wymóg normy PN-EN ISO 9712",
      "badania": "MP - badanie okulistyczne wzroku według skali Jaegera (OHDP020)"
  },
  {
      "czynnik": "Obsługa urządzeń transportu bliskiego (UTB)",
      "badania": "Brak wskazania we wskazówkach metodycznych"
  }
]

export default testList; 