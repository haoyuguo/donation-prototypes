<template>
    <div>
        <hr>
        <h3>Pay by Credit Card</h3>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Credit Card No.</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" id="creditCardNumber" type="number" required>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Name on Card</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" id="cardHolder" type="text" required>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Expiration</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" id="expiration" type="text" required>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Security</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" id="security" type="number" required>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{}
</script>