<template>
    <div>
        <!-- Basic Donation Form -->

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Name</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" id="name" type="text" required>
                    </div>
                    <!--
                    <p class="help is-danger">
                        This field is required
                    </p>-->
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Email</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" id="email" type="email" required>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label is-normal">
                <label class="label">Amount ($)</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input class="input" id="amount" type="number" step="0.01" required>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default{}
</script>