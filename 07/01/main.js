const input = document.querySelector('input');
const a = document.querySelector('a');

input.addEventListener('input', correctEntry);
input.addEventListener('focus', correctEntry);
input.addEventListener('blur', correctEntry);

function setCursorPosition(pos, elem) {
  elem.focus();
  if (elem.setSelectionRange) { elem.setSelectionRange(pos, pos); } else if (elem.createTextRange) {
    const range = elem.createTextRange();

    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

function correctEntry(event) {
  const mask = '+ 7 (_ _ _) - _ _ _ - _ _ - _ _';
  let i = 0;
  const def = mask.replace(/\D/g, '');
  let val = this.value.replace(/\D/g, '');

  if (def.length >= val.length) { val = def; }
  this.value = mask.replace(/./g, a => {
    if (/[_\d]/.test(a) && i < val.length) {
      return val.charAt(i++);
    }
    return i >= val.length ? '' : a;
  });
  if (event.type === 'focus' && input.value === '') {
    this.value = '+ 7';
  }
  if (event.type === 'blur' && input.value === '+ 7') {
    this.value = '';
  }
  if (event.type === 'input') {
    setCursorPosition(this.value.length, this);
  }
  if (this.value.length === mask.length) {
    a.textContent = `Позвонить на ${this.value.replace(/\s/g, '')}`;
  }
}
