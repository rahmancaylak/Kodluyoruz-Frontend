const UL = document.querySelector('#list'); // ul etiketini çektik.
const TASK = document.querySelector('#task'); // kullanıcıdan veri almak için inputu çektik.
const TOAST_MESSAGE = document.querySelectorAll('#liveToast'); // toast mesajları için id alıyoruz.
let li,
    toastTimeOut,
    task_id = 1,
    listStorage = {};

function newElement() {
    if (TASK.value.trim() == '') {
        // Önceden girdiği veriyi temizliyoruz.
        TASK.value = "";
        // Liste ekleme işlemi başarısızsa toast'a false gönderir.
        showToast(taskInfo = false);
    } else {
        // Liste eklendiyse toast'a true gönderir.
        showToast(taskInfo = true);
        // ve Listeyi eklemeye başlarız.
        addTask(TASK.value.trim());
    }
};

// Tek tek attributleri, classları ekleyerek yapıldı.
function addTask(task_value) {
    // Kullanıcıdan aldığımız texti bir değişkene aktarıyoruz.
    task_value = document.createTextNode(task_value);
    span = document.createElement('span');
    span.append(task_value);
    span.innerText = "aaa";
    li = document.createElement('li');
    li.setAttribute('id', `task-id-${task_id}`);
    li.appendChild(span);
    li.className = 'in-progress';

    cancelButton = document.createElement('button');
    cancelButton.className = 'btn btn-danger cancelButton';
    cancelButton.setAttribute('onClick', `deleteTask(${task_id})`);
    cancelText = document.createTextNode("x");
    cancelButton.append(cancelText);

    li.appendChild(cancelButton);
    UL.appendChild(li);

    tasksStorage();

    task.value = "";
    task_id += 1;
}

// Task silme işlemi burada gerçekleşir. Silindi toast mesajımı bastırır ve localdeki veriyi güncelleriz.
function deleteTask(task_id) {
    getTask = document.getElementById(`task-id-${task_id}`).remove();
    TOAST_MESSAGE[2].classList.replace('hide', 'show');
    toastTimeOut = setTimeout(() => TOAST_MESSAGE[2].classList.replace('show', 'hide'), 3000);
    tasksStorage();
}

// Li etiketine tıklanma eventini alıyoruz ve tamamlandı olarak class'ını veriyoruz.
UL.addEventListener('click', updateTask);

function updateTask(e) {
    let target = e.target;
    if (target.tagName === 'LI') {
        target.className == 'in-progress' ? target.classList.replace('in-progress', 'completed') : target.classList.replace('completed', 'in-progress');
        tasksStorage();
    }
}

// Eklenip, Eklenmediğini bildiren (3 saniye sonra yok olan) Toast mesajı
function showToast(taskInfo) {
    if (taskInfo) {
        // hide olan class'ı show olarak değiştiriyoruz.
        TOAST_MESSAGE[0].classList.replace('hide', 'show');
        toastTimeOut = setTimeout(() => TOAST_MESSAGE[0].classList.replace('show', 'hide'), 3000);
    } else {
        // hide olan class'ı show olarak değiştiriyoruz.
        TOAST_MESSAGE[1].classList.replace('hide', 'show');
        toastTimeOut = setTimeout(() => TOAST_MESSAGE[1].classList.replace('show', 'hide'), 3000);
    }
}

// Ekrandaki toast mesajlarını buton ile kapatma
function closeToast(toastId) {
    TOAST_MESSAGE[toastId].classList.replace('show', 'hide');

    // Yukarıdaki setTimeOut işlemini iptal ediyoruz. Çünkü ard arda hızlı toast yaptırırsak,
    // diğer işlem gerçekleşene kadar setTimeOut süresi devreye giriyor ve otomatik kapanıyor.
    clearTimeout(toastTimeOut);
}

// DOM yüklendikten sonra localde sakladığımız verileri çekiyoruz.
document.addEventListener("DOMContentLoaded", function() {
    let tasksObject = JSON.parse(localStorage.getItem('tasksObject'));
    UL.innerHTML = (tasksObject.tasks);
});

// Localde verilerimizi saklıyoruz.
function tasksStorage() {
    listStorage.tasks = UL.innerHTML;
    localStorage.setItem('tasksObject', JSON.stringify(listStorage));
}