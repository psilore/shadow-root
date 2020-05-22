<body>

    <div class="control-box closed">
            <div class="control-group">

            <h5>Hydra claw box configuration</h5>
                <label for="screen">Corner position</label>
                <div id="screen" class="screen">
                    <div>
                        <input id="topLeft" type="radio" aria-label="Top left">
                        <input id="topRight" type="radio" aria-label="Top right">
                    </div>
                    <div>
                        <input id="bottomLeft" type="radio" aria-label="Bottom left">
                        <input id="bottomRight"  type="radio" aria-label="Bottom right">
                    </div>
                </div>
                <div class="small">Desktop</div>
            </div>
        <button class="control-box-button">Settings</button>
    </div>

    <script async type="module" src="./hydra-claw.js"></script>
    <hydra-claw position="" floating></hydra-claw>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="./main.js"></script>
</body>
