var Show = (function(){

    var $btnNewTransaction;
    var $modalTransaction;
    var $btnSave;
    var $inputAmount;
    var $selectTransactionType;
    var $parameters;
    var $notification;

    var bankAccountId;
    var url = '/api/v1/bank_accounts/new_transaction';

    var fetchElements = function(){
        $btnNewTransaction      = $("#btn-transaction");
        $modalTransaction       = $("#modal-transaction");
        $btnSave                = $("#btn-save");
        $inputAmount            = $("#input-amount");
        $selectTransactionType  = $("#select-transaction-type");
        $parameters             = $("#parameters");
        $notification           = $(".notification");

        bankAccountId           = $parameters.data("bank-account-id");
    };

    var disableControls = function(params){
        $btnSave.prop("disabled", true);
        $inputAmount.prop("disabled", true);
        $selectTransactionType.prop("disabled", true);
    };
    var enableControls = function(params){
        $btnSave.prop("disabled", true);
        $inputAmount.prop("disabled", true);
        $selectTransactionType.prop("disabled", true);
    };

    var initializeEvents = function(){
        $btnNewTransaction.click(function(){
            $modalTransaction.modal("show");
        });

        $btnSave.click(function(){
            var amount          = $inputAmount.val();
            var transactionType = $selectTransactionType.val();
            disableControls();

            $notification.html("");
            $.ajax({
                url: url,
                method: 'POST',
                dataType: 'json',
                data: {
                    amount: amount,
                    transaction_type: transactionType,
                    bank_account_id: bankAccountId
                },
                success: function(){
                    window.location.href = "/bank_accounts/" + bankAccountId;
                },
                error: function(response){
                    $notification.html(JSON.parse(response.responseText).errors.join())
                    enableControls();
                }
            })
        });
    };

    var init = function(){
        fetchElements();
        initializeEvents();
    };

    return {
        init: init
    }
})();