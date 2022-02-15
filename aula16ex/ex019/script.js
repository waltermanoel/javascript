
function analizar () {
    let doc = window.document
    let campoNum = doc.getElementById("campoNum")
    let num = Number(campoNum.value)
    let vali = true
    let nums = []

    if (campoNum.value.length == 0 || num < 1 || num > 100) {
        vali = false
    } else if (nums.length > 0) {
        for (let pos in nums) {
            if (nums[pos] == num) {
                vali = false
                break
            }
        }
    }
    if (vali == false) {
        alert("Valor inválido ou já encontrado na lista.")
    } else {
        
    }



}
