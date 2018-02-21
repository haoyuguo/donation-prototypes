<template>
    <div>
        <hr>
        <h3>Company Matching Gift</h3>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Company</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" id="company" type="text" required>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Expected Amount ($)</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" id="matchingAmount" type="number" step="0.01" required>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default{}
</script>