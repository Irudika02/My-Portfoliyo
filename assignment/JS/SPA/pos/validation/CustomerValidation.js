$("#txtCustomerID").focus();

const cusIDRegEx = /^(C00-)[0-9]{1,3}$/;
const cusNameRegEx = /^[A-z ]{5,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
const cusContactRegEx = /^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$/;
const cusSalaryRegEx = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

let customerValidations = [];
customerValidations.push({reg: cusIDRegEx, field: $('#txtCustomerID'),error:'Customer ID Pattern is Wrong : C00-001'});
customerValidations.push({reg: cusNameRegEx, field: $('#txtCustomerName'),error:'Customer Name Pattern is Wrong : A-z 5-20'});
customerValidations.push({reg: cusAddressRegEx, field: $('#txtCustomerAddress'),error:'Customer Address Pattern is Wrong : A-z 0-9 ,/'});
customerValidations.push({reg: cusContactRegEx, field: $('#txtCustomerContact'),error:'Customer Contact Pattern is Wrong : 0-9 ,/'});
customerValidations.push({reg: cusSalaryRegEx, field: $('#txtCustomerSalary'),error:'Customer Salary Pattern is Wrong : 100 or 100.00'});

$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerContact,#txtCustomerSalary").on('keydown', function (event) {
    if (event.key == "Tab") {
        event.preventDefault();
    }
});


$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerContact,#txtCustomerSalary").on('keyup', function (event) {
    checkValidity();
});

$("#txtCustomerID,#txtCustomerName,#txtCustomerAddress,#txtCustomerContact,#txtCustomerSalary").on('blur', function (event) {
    checkValidity();
});

function checkValidity() {
    let errorCount=0;
    for (let validation of customerValidations) {
        if (check(validation.reg,validation.field)) {
            textSuccess(validation.field,"");
        } else {
            errorCount=errorCount+1;
            setTextError(validation.field,validation.error);
        }
    }
    setButtonState(errorCount);
}
$("#txtCustomerID").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusIDRegEx, $("#txtCustomerID"))) {
        $("#txtCustomerName").focus();
    } else {
        focusText($("#txtCustomerID"));
    }
});
$("#txtCustomerName").on('keydown', function (event) {
    if (event.key == "Enter" && check(cusNameRegEx, $("#txtCustomerName"))) {
        focusText($("#txtCustomerAddress"));
    }
});