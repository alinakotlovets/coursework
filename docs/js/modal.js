(()=>{const e={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o);const d=document.querySelector(".backdrop"),t=document.body;document.querySelector("[data-modal-close]").addEventListener("click",(function(){d.classList.add("is-hidden"),t.classList.remove("no-scroll")})),document.querySelector("[data-modal-open]").addEventListener("click",(function(){d.classList.remove("is-hidden"),t.classList.add("no-scroll")}))})();