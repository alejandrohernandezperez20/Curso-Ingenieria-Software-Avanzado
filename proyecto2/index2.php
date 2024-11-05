<?php include 'log/header.php'?>
<script src="./js/funcion.js"></script>
<div
    class="container" style="margin-top: 50px;"
>
    <div
        class="table-responsive"
    >
        <table
            class="table table-primary"
        >
            <thead>
                <tr>
                    <th scope="col"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="30" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg></th>
                    <th scope="col">lunes</th>
                    <th scope="col">martes</th>
                    <th scpe="col">miercoles</th>
                    <th scpe="col">jueves</th>
                    <th scpe="col">viernes</th>
                </tr>
            </thead>
            <tbody>
                <tr class="">
                    <td scope="row"><b>PRODUCTOS:</b></td>
                    <td id="demo1"></td>
                    <td id="demo2"></td>
                    <td id="demo3"></td>
                    <td id="demo4"></td>
                    <td id="demo5"></td>
                </tr>
                <tr class="">
                    <td scope="row"><b>GASTOS:</b></td>
                    <td id="demo6"></td>
                    <td id="demo7"></td>
                    <td id="demo8"></td>
                    <td id="demo9"></td>
                    <td id="demo10"></td>
                </tr>
            </tbody>
            
        </table>
    </div>
    <button type="button" class="btn btn-danger" onclick="funcion1()">MIS COMPAS</button>
    <div style="padding: 20px;background-color: beige;border: 2px solid black;height: 200px;width: 400px;float: right">
        <p style="text-align: center;">Gastos semanales</p>
        <br>
        <p>Totales gastos semanal: </p>
        <p  id="resultado"></p>
    </div>
</div>

<?php include 'log/footer.php'?>