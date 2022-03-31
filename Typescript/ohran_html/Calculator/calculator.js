class Calculator { /* in this class we have the constructor who takes all the imputs and all the functions for our calculator */ 
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    clear() { /* clear function for clearing all our work on the calculator */
      this.currentOperand = ''
      this.previousOperand = '' /* when we click on clear we set previous and current operand to blank space and we have undefined operation to work with */ 
      this.operation = undefined
    }
  
    delete() { /* delets one item at time from our calculator */
      this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }
  
    appendNumber(number) { /* what happens when user clicks on a number button on the calculator */
      if (number === '.' && this.currentOperand.includes('.')) return  /* we can add only one period il ti ga . in our program */
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) { /* What happens when we use an operation */
      if (this.currentOperand === '') return 
      if (this.previousOperand !== '') { /* if we did math in our calculator and we add one more operation it will first do the first operation then the secound operation ...*/
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = '' /* prebacuje operator i operaciju koja se vrsi na operatoru u gornji dio kalkulatora kako bi mogli operand pisati ponovo na donjem dijelu kalkulatora */
    }
  
    compute() { /* finishes math in our calculator or more precise takes 2 valuse and compleats it in one value */
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {  /* switch is same as if but it allows us to do bunch of if statemants on each data element ... */
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      } /* we asign the inner text from button with the math operation with prev and current operand by giving them new const in this function ...*/
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
    }
  
    updateDisplay() { /* Updates values in our calculator */ 
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  
  const numberButtons = document.querySelectorAll('[data-number]') /* querySelectorAll takes all numbers atributes, down there operations */ 
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]') /* selects smaller-used  buttons atributes but we have to select them manualy and give them const */
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  const currentOperandTextElement = document.querySelector('[data-current-operand]')
  
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)
  
  numberButtons.forEach(button => { /* for every number we have eventlistener who will on click display our number from the button innertext and update display where we calculate the numbers */ 
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  operationButtons.forEach(button => { /* on clock chooses the operation from operation button and ands it to calculator for usage  exp + ...*/
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
  
  equalsButton.addEventListener('click', button => { /* when we click on = button it will on click calculate and update or display with the rezultat */ 
    calculator.compute()
    calculator.updateDisplay()
  })
  
  allClearButton.addEventListener('click', button => { /* for clearing all items in calculator on click */
    calculator.clear()
    calculator.updateDisplay()
  })
  
  deleteButton.addEventListener('click', button => { /* for deleting one item in calculator */
    calculator.delete()
    calculator.updateDisplay()
  })



  /* MANE OVOG KALKULATORA
 - Nije moguće raditi više matematičkih operacija npr 6/2*(1+2)   rezultat mog kalkulatora bi bio 7 a pravi rezultat treba biti 1 ... 
  */