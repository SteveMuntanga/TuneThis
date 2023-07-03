if(navigator.userAgent.match(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)) { X6z75a = false; } else { X6z75a = true; } vlc = true;
window.onload = () => {
    isModal = false;
    oldModal = false;
    y197ko = document.querySelector("input[type=search]");
    audio = document.querySelector("audio");
    vfvfv = document.getElementById("vfvfv"); 
    _Yv784 = document.getElementById("Wg6hk");
    Y72d = document.getElementById("Cc6b5");
    _k58k7 = document.querySelector("div.Cc6b5h");
    y197ko.addEventListener("input", Y5k89g);
    window.addEventListener("scroll", () => { 
if(y197ko.value === ""){y197ko.blur()}});
    document.body.addEventListener("click", bp7vf);
    style = document.querySelector("style");
    td = document.querySelectorAll("td[class=\"FF2yr\"]");
    _P7bg6 = document.querySelector("span[class=\"v9d5c\"]");
    _Y75d = document.getElementById("dD6b8");
    _X5k8 = document.querySelector("span[class=\"v9d5\"]");
    Y27d = document.querySelector('div[id="V6h7"]>img');
    _Y5xd = document.querySelector("input[type=range]");
    _Y6xe = document.querySelector('div[id="V6h7"]>img');
    case_div = document.querySelector('div[id="V6h7"]>div');
    display = document.getElementById("C4h6bc");
    window.addEventListener("scroll", bp7vf);
if(X6z75a) {
        document.body.addEventListener("click", () => xx87());
        C4h6bc.addEventListener("contextmenu", kk6jj7);
        C4h6bc.focus();
    }/* else {
        window.addEventListener("scroll", bp7vf);
    }*/
    Yy7Gw();
    C4h6bc.addEventListener("click", (e) => {
        if(X6z75a) {
            w = e.target;
            if(w.className != "list") {
                do{
                    w = w.parentElement;
                } while(w.className != "list");
            }
            key = w.getAttribute("key");
            xxx = key;
            n = -1;
            do{
                n++;
            }while(C4h6bc.children[n] != w);
            _Rxp7 = n;
            ggf8h2();
            Cxdm();
        } else {
            if(e.target.className != "elips" && e.target.parentElement != _Yv784) {
                w = e.target;
                if(w.className != "list") {
                    do{
                        w = w.parentElement;
                    } while(w.className != "list");
                }
                key = w.getAttribute("key");
                xxx = key;
                n = -1;
                do{
                    n++;
                }while(C4h6bc.children[n] != w);
                _Rxp7 = n;
                ggf8h2();
                Cxdm();
            }
        }
    });
}
_dir1 = "1.png"; _dir2 = "2.png";
_dir3 = "4.png"; _dir4 = "5.png";
function kk6jj7(e) {
    keyd = key;
    if(X6z75a) {
        if(e.target.tagName != "IMG") {
            e.preventDefault();
            w = e.target;
            if(w.className != "list") {
                do{
                    w = w.parentElement;
                } while(w.className != "list");
            }
            key = w.getAttribute("key");
            _Yv784.style.display = "block";
			_Yv784.style.left = e.pageX + "px";
	        _Yv784.style.top = e.pageY + "px";
        }
    } else {
        if(e.target.className == "elips") {
            w = e.target;
            if(w.className != "list") {
                do{
                    w = w.parentElement;
                } while(w.className != "list");
            }
            key = w.getAttribute("key");
            _Yv784.style.display = "block";
            _Yv784.style.right = "15px";
            _Yv784.style.top = e.target.getBoundingClientRect().top + "px";
        }
    }
}
function Fc57k() {w.click();}
function Yy7Gw() {
		for(a = 0; a < _v9b8; a++) {
			n = vx7b[a];
	        select = chart[n].split('.');
	        key = chart[n];
	        k = database[select.shift()];
	        x = k[select.shift()];
			_qW3f5();
}
    key = C4h6bc.firstElementChild.getAttribute("key");
    ggf8h2();
    key = C4h6bc.firstElementChild.getAttribute("key");
    Cxdm();
    _Rxp7 = 0;
    style.innerHTML = '.list[key="'+key+'"] {background-color: #3C6478; color: rgb(255, 255, 255); font-size: 13px; outline: none; border: none} .list[key="'+key+'"] button.elips {color: rgb(255, 255, 255); font-size: 17px}';
    xxx = key;
    ap5hi();
}
function ggf8h2() {
    tk = key;
    key = key.split('.');
    k = key.shift();
    x = key.shift();
    k = database[k];
    x = k[x];
    key = tk;
}
function Cxdm() {
	audio.src = x.url;
	_X5k8.innerText = "Loading...";
	_P7bg6.innerText = "Please wait...";
	audio.addEventListener('loadedmetadata', () => {
	_X5k8.innerText = x.name;
	if(X6z75a) {
    if(x.feat) {
	if((k.name.length + x.feat.length) > 46) {
	_P7bg6.innerText = (k.name + " ft. " + x.feat).substring(0, 56) + "...";
	}
	else {_P7bg6.innerText = k.name + " ft. " + x.feat;}
	}
	else {_P7bg6.innerText = k.name;}
    }
    else {
    _P7bg6.innerText = k.name;
    }
	});
    if(x.img) { Y27d.src = x.img;}
	else Y27d.src = "DefaultArt.jpg";
    style.innerHTML = '.list[key="'+key+'"]{background-color: #3C6478; color: rgb(255, 255, 255); font-size: 13px; outline: none; border: none} .list[key="'+key+'"] button.elips {color: rgb(255, 255, 255); font-size: 17px}';
}
function qq5vc() {
document.querySelector("audio").addEventListener("timeupdate", function() {
	var value = audio.currentTime / audio.duration * 100;
	_Y5xd.value = value;
 });
 }
function iv7b0() {
if(vlc) {
    document.getElementById('gkg7t').src = _dir1;
    vlc = false;
  } else {
    document.getElementById('gkg7t').src = _dir2;
    vlc = true;
  }
}
function D57pk() {
  var xzxzcz = audio.duration * (_Y5xd.value / 100);
  audio.currentTime = xzxzcz;
}
function Gr3b7() {
    _Rxp7++;
    if(C4h6bc.children[_Rxp7]) C4h6bc.children[_Rxp7].click(); else C4h6bc.firstElementChild.click();
}
function Z7b4h() {
    _Rxp7--;
    if(C4h6bc.children[_Rxp7]) C4h6bc.children[_Rxp7].click(); else C4h6bc.lastElementChild.click();
}
function Hyt6r() {
    vfvfv.href = x.url;
    vfvfv.click();
}
function Zx56h() {
	if(audio.paused) {
		ap8k();
	}
	else ap5hi();
    style.innerHTML = '.list[key="'+key+'"], button .elips {background-color: #3C6478; color: rgb(255, 255, 255); font-size: 13px; outline: none; border: none} .list[key="'+key+'"] button.elips {color: rgb(255, 255, 255); font-size: 17px}';
}
function ap8k() {
	audio.play();
	document.getElementById("mpp").src = _dir4;
	}
function ap5hi() {
	audio.pause();
	document.getElementById("mpp").src = _dir3;
	}
function xx87() {_Yv784.style = "";}
function Fc57k9() {
    ggf8h2();
    Hyt6r();
    key = keyd;
    ggf8h2();
}
function Sv6kl() {
    ggf8h2();
    if(x.img) {
    vfvfv.href = x.img;
    } else vfvfv.href = "DefaultArt.jpg";
    vfvfv.click();
    key = keyd; 
    ggf8h2();
}
function activateModal() {
    if(isModal) Esc();
    if(oldModal == modal) {
        Esc();
        oldModal = false;
    } else {
        oldModal = modal;
        document.getElementById(modal).style.display = "block";
        document.getElementById(modal).focus();
        document.getElementById("cv97f").style.display = "block";
        isModal = true;
    }
}
function vxpvxp() {
	if(!vlc){audio.play();} else Gr3b7();
}
function Esc() {
    if(oldModal) document.getElementById(oldModal).style = "";
    if(modal) {
        document.getElementById(modal).style = "";
        document.getElementById("cv97f").style = "";
        isModal = false;
    }
}
function L7ki9() {
    modal = "sssl";
    activateModal();
}
function Sc6kl() {
	ggf8h2();
    Tg7ag();
    key = keyd; 
    ggf8h2();
}
function _qW3f5() {
	        if(X6z75a) {
            list = document.createElement("div");
            C4h6bc.appendChild(list);
            list.className = "list";
            list.setAttribute("key", key);
            img = document.createElement("img");
            list.appendChild(img);
            img.className = "img";
            if(x.img) {
            img.src = x.img;
            } else img.src = "DefaultArt.jpg";
            ref = document.createElement("span");
            list.appendChild(ref);
            ref.className = "ref";
            ref.innerText = a + 1;
            song = document.createElement("span");
            list.appendChild(song);
            song.className = "song";
			if(x.feat) {
			if((x.name.length + x.feat.length) > 46) {
			song.innerText = (x.name + " (feat. " + x.feat).substring(0, 56) + "... )";
			}
			else song.innerText = x.name + " (feat. "+ x.feat + ")";
			}
			else song.innerText = x.name;
            artist = document.createElement("span");
            list.appendChild(artist);
            artist.innerText = k.name;
            artist.className = "artist";
            artist = document.createElement("span");
            list.appendChild(artist);
            if(x.album) {
            artist.innerText = x.album;
            } else artist.innerText =  "Unknown Album";
            artist.className = "album";
        }
 else {
            list = document.createElement("div");
            C4h6bc.appendChild(list);
            list.className = "list";
            list.setAttribute("key", key);
            img = document.createElement("img");
            list.appendChild(img);
            img.className = "img";
            if(x.img) {
            img.src = x.img;
            } else img.src = "DefaultArt.jpg";
            ref = document.createElement("span");
            list.appendChild(ref);
            ref.className = "ref";
            ref.innerText = a + 1;
            container = document.createElement("div");
            list.appendChild(container);
            container.className = "container";
            song = document.createElement("span");
            container.appendChild(song);
            song.className = "song";
            song.innerText = x.name;
            artist = document.createElement("span");
            container.appendChild(artist);
            if(x.feat) {
			if((k.name.length + x.feat.length) > 27) {
			artist.innerText = (k.name + " ft. "+ x.feat).substring(0, 26) + "...";
			}
			else artist.innerText = k.name + " ft. "+ x.feat;
			}
			else artist.innerText = k.name;
            artist.className = "artist";
            elips = document.createElement("button");
            list.appendChild(elips);
            elips.innerText = "•••";
            elips.className = "elips";
            elips.addEventListener("click", kk6jj7);
        }
}
function Tg7ag() {
    _Y75d.href = x.url;
    if(x.img) {
    _k58k7.style.backgroundImage = 'url(\'' + x.img +'\')';
    } else _k58k7.style.backgroundImage = 'url("DefaultArt.jpg")';
    if(x.feat) {
	td[0].innerText = k.name + " (featuring " + x.feat + ")";
	}
	else td[0].innerText = k.name;
    td[1].innerText = x.name;
    if(x.album) {
	td[2].innerText = x.album;
	} else td[2].innerText = "Unknown Album";
    if(x.released) {
    td[3].innerText = x.released;
    } else td[3].innerText = "...";
    if(k.country) {
    td[4].innerText = k.country;
    } else td[4].innerText = "...";
    td[5].innerText = "Loading data...";
    xd = new Audio(x.url);
    xd.addEventListener('loadedmetadata', () => {
    xc = xd.duration;
    if(xc) {
        len = Math.round(xc);
        min = 0;
        do {
            if(len >= 60) {
				len -= 60;
				min++;
			}
        } while(len >= 60);
        if(len < 10) {
			len = '0' + len;
		}
        td[5].innerText = min + ":" + len;
    }
	});
    modal = "Cc6b5";
    document.getElementById("cv97f").style.display = "block";
    document.getElementById(modal).style.display = "block";
}
function Y5k89g() {
    _Y57d = y197ko.value.toLowerCase().replace(/<|>|;|:|\/|\\|\(|\)|"|'|-|_|#/g, " ");
    C4h6bc.innerHTML = '';
    isNotFound = true;
    a = 0;
    xo = 1;
    do {
        key = chart[vx7b[a]];
        ggf8h2();
        key = chart[vx7b[a]];
        is = false;
        if(x.name.toLowerCase().includes(_Y57d) || x.name.toLowerCase().replace(/[.]/g, '').includes(_Y57d) || x.name.toLowerCase().replace(/[&]/g, 'and').includes(_Y57d) || x.name.toLowerCase().replace(/and/g, '&').includes(_Y57d) || k.name.toLowerCase().includes(_Y57d) || k.name.toLowerCase().replace(/[.]/g, '').includes(_Y57d) || k.name.toLowerCase().replace(/[&]/g, 'and').includes(_Y57d) || k.name.toLowerCase().replace(/and/g, '&').includes(_Y57d)) {
            is = true;
        }
        if(x.feat) {
        if(x.feat.toLowerCase().includes(_Y57d) || x.feat.toLowerCase().replace(/[.]/g, '').includes(_Y57d) || x.feat.toLowerCase().replace(/[&]/g, 'and').includes(_Y57d) || x.feat.toLowerCase().replace(/and/g, '&').includes(_Y57d)) {
            is = true;
        }
        }
        if(x.album) {
        if(x.album.toLowerCase().includes(_Y57d) || x.album.toLowerCase().replace(/[.]/g, '').includes(_Y57d) || x.album.toLowerCase().replace(/[&]/g, 'and').includes(_Y57d) || x.album.toLowerCase().replace(/and/g, '&').includes(_Y57d)) {
            is = true;
        }
        }
		if(k.country) {
        if(k.country.toLowerCase().includes(_Y57d)) {
            is = true;
        }
        }
        if(is) {
            xo++;
            _qW3f5();
	        isNotFound = false;
		}
     a++;
     }while(chart[vx7b[a]]);
if(isNotFound) {
		        if(X6z75a) {
            C4h6bc.innerHTML = '<p style="font-family: roboto; font-weight: bold; opacity: 0.7; display: block; font-size: x-large; text-align: center"><i>Sorry, no results for</i> “'+ _Y57d.replace(/&/g, "& ") + '” <br><br></p>';
        } else {
            C4h6bc.innerHTML = '<p style="font-family: roboto; font-weight: bold; opacity: 0.7; display: block; font-size: large; text-align: center"><i>Sorry, no results for</i> “'+ _Y57d.replace(/&/g, "& ") + '” <br><br></p>';
        }
	}
}
function kko67() {
    X6z75a ? xx87() : bp7vf();
}
function bp7vf(e) {
    if(e.target.className != "elips") {
        xx87();
    }
}