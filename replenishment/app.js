(function() {
  Vue.use(VueLazyload, {
    preLoad: 1.5,
    error: '/static/img/img-err-250.jpg',
    loading: '/static/img/img-err-250.jpg',
    attempt: 1
  });
  new Vue({
    el: '#item-app',
    data: {
      items: [],
      selected: [],
      counts: 0,
      step: 30,
      round: 1,
      span_from: 0,
      span_to: 30,
      disabled: false,
      maker_array: [0,1,2,3,4,5,"DMT",7,8,9,"Trumark","Magforce","Mace",13,"Spyderco",15,16,17,18,"Inova",20,"Al Mar","Benchmade","Boker",24,"Buck","C.R.K.T.","Camillus",28,"Chris Reeve",30,31,32,"Eickhorn","Emerson","Fox","Gerber","Helle","Ka Bar","Cold Steel","Colt","Kershaw",42,"Laguiole","Leatherman","Lone Wolf","M.O.D.","Mcgowan","Microtech","Mission","Ontario","Opinel","Sebertech","Smith&Wesson","Sog","Swisstech","Timberline",57,"UK","United Cutlery","WilliamHenry",61,"Masano","Higonokami(肥後守)","Tsuge(拓植久慶)","G.Sakai","Hattori","Moki","Seki-Cut","Victorinox","Gatco","Lansky","Sentry",73,"Kanetsune","L.R.I.","Maglite","Nite Ize",78,79,80,81,"Streamlight","Surefire",84,85,"Outdoor","Police","Marksman","Camelbak","GUN","Hatch","ASP",93,"Zippo","Kowell","Ultimate Survival",97,"Beretta","Takeshi saji(佐治武士)",100,"Knife Life Magazine",102,"Sawyer",104,"Taiwan(台製)","Tru-Spec","NRA Outdoors","Piexon",109,110,111,"Koji Hara(原幸治)","Brian Tighe",114,115,"MurrayCarter",117,"Polaris",119,"Norinco","Pro Force",122,"HK","Citadel","Combat Elite",126,"David Yellowhorse","Fox 40","Others","Sakurai Kazuyuki(櫻井和幸)","Linder",132,"GLOCK","Japan Knife Magazine","Mercworx","MCUSTA",137,"IC.CUT","Kiku Matsuda(松田菊男)","IDOX","Bolle","Tomway","Sanrenmu(三刃木)","Fenix",145,146,147,148,"Bradley","Maserin","Traser H3","Viper",153,154,"Brunton","Kellam",157,"Key-Bak","Hiro Knives","Highgear","Rothco","Muela",163,"Mikov","Monadnock","Alta Tactical","WileyX",168,169,"Tramontina",171,172,173,174,"Night Owl Optics",176,177,"Leki","Huntlight","Athro",181,"JetBeam",183,"Guarder","Sealskinz","Valeo","F.Dick",188,"Bison","nite","Jimmy Chin",192,"Damascus","Siskiyou","Lee-Cheng-Hsin","Fisher","Light-My-Fire",198,"Predator",200,201,"Custom Knifemaker",203,204,205,"Storm",207,208,"ICON","Windmill","Extrema Ratio","Khukuri House",213,"Pearl",215,216,"Sabre","Flitz","INFORCE","Silva","Green Bell","Mad Dog","WILSON",224,"Seizo Imai","Carson","Meyerco","LED Lenser","Master Cutlery","Nemoto",231,232,233,234,235,"Aromatch","ZHEN KITCHEN",238,239,240,"Nikon",242,"Mantis Knives","Strider Knives",245,"DMM","Jamie","SRB Technologies",249,250,"Sarome","CooYoo",253,254,"BlackHawk","Maxtim","eGear","Harley-Davidson","ESEE","Damascus Knives","Sunwayman",262,263,264,265,266,267,268,"Silver Stag","Skullsville",271,"Rockstead",273,"Blackjack","Marlborough","Industrial Revolution","Condor Tool&Knife",278,"T-REIGN","McNett","Jameson Woodworks","Tuff","Adventure Medical Kits","Pro-tech Knives","Vortex Optics","Nemesis Knives","Rick Hinderer Knives","HOGUE KNIVES","今峰作","Grabber","Japan Brand",292,"Echizen","HAIX","HTM","Enlan","Captain B. Koyama",298,299,300,"Atwood Rope","Huntrek",303,"Norton","Arno Bernard Knives","Elite","UVpaqlite","AITOR","Browning","Midred","Iain Sinclair","Kuki(九鬼隆一)","HINOURA(日野浦)","Kitanica","De Santis","PMI","TGM 綠色金屬",318,"Down Under","Exotac","Bear OPS","Krudo","Hazard 4","Lion Steel","Karesuando Kniven","DPx","Tops Knives","Vargo","TurtleSkin","Hubertus","Mora","Russ kommer","Warren Osborne","Spartan","RMJ","Matt Diskin",337,"Grindworx","Pohl Force","ESTWING","QTRM5TR(後勤軍需刀具)","Ron Newton",343,"Laken","Esbit","P.A.C.","Mountain King","5.11","Tozando","kevin R.CASHEN","JS","Bill Buxton","Boll",354,"Schmuckatelli","Walkstool","Deejo","Gentos","Eiji Kikkaawa(吉川英治)","True Utility","P.K DESIGN LAB","Luminox","NITECORE","Ispack","Kizer","Nose Mask Pit","EasyLiving",368,"Klarus","Skilhunt","Olight","KS TOOLS","關藏作","Thrunite","Armytek","Steelwill","Work Sharp","Cypress Creek","Reate","Acebeam","Flexcut",382,"BCB","NexTool","Antonini","Manker","Blunt","Nordic Grip","3R","Fallkniven","Shimada","Nikken","Live-Fire","Global","Klecker","StrikeFire","Realsteel","ARCTERYX","Lumintop","BLACKWATER","Misono","MecArmy","Tekut","Mondaine","Credo solingen","Westmark","TREEMAN","Mechanix","RESQME","QuokkaJoy","Mysteryranch","Pocketshot","Outliving","Jake Hoback","Niegleoh","KEY | SMART","Maxpedition","黑澤次夫","三浦勝彥","Nextorch","裕翠工房ITOU","佳人作","鷹爪行動","SUWADA","ENERPAD","IMALENT","Dovo","Olamic","Bastinelli","Glenn Waters","Winkler Knives II","Helius","Jerry Hossom","Swiss Advance","ISTOR","Matthew Martin","Andre De Villiers","Cammenga","CAMOUFLAGE","Tactical Geek","Williams Blade Design","FITORCH","Maxace","Dew Hara","福田正孝","日本NAGOMI","PROPPER","Karrimor","Pfeilring","Outdoor Edge","SPARK LIGHT","各類刀架","WE KNIFE","AKC","Stanley","Claude Dozorme","Folomov","STREET WISE","SMRT","ZOKU","NEBO","RovyVon","WUBEN","TIMEX","荒川知芳","Mummert Knives","Mito",468,"ROXON","DOZIER","MKM KNIVES","Liong Mah","White River","RAYSUN","UCO","Kpl","SRM","Defcon","Deva Blade","Farfalli","Gastrock","TB Outdoor","鈴木寬","HAND MADE (手工製)","MEL PARDUE","ArtisanCutlery","CHUYU","JAPAN MADE(日本製)","VERO MACHINE INDUSTRIES","FLEXXX STROPS","Schrade","FAB Defense","NOKOSER","Gran's Remedy","DDR","ROCK CREEK","S-TEC","MiBOXER","TRIANGLE","Police Force Tactical","PSK","Original SWAT","Case","UMAREX WALTHER","A&R","YUKIO NIBE (二部 幸夫)","Tsubazo (關鍔藏)"]
    },
    mounted: function() {
      var _self = this;
      axios.get('api.php')
      .then(function(resp) {
        _self.items = resp.data;
        _self.counts = _self.items.length;
        _self.selected = _self.selected.concat(_self.items.slice(_self.span_from, _self.span_to));
        _self.resume();
      });
    },
    methods: {
      sumUp: function(counts) {
        this.counts = counts;
      },
      loadMore: function() {
        var _self = this;
        _self.selected = _self.selected.concat(_self.items.slice(_self.span_from, _self.span_to));
        _self.resume();
      },
      resume: function() {
        var _self = this;
        _self.span_from = (_self.step * _self.round) + 1;
        _self.span_to = _self.step * (_self.round + 1);
        _self.round = _self.round + 1;
        if (_self.span_to > _self.counts) {
          _self.disabled = true;
          _self.span_to = _self.counts - (_self.step * _self.round);
        }
      }
    }
  })
})()