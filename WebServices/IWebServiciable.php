<?php

interface IWebServiciable {

    function __construct($requestParams);

    public function setParameters();

    public function doRequest();
    public function doGet();
    public function doPOST();
    public function doPut();
    public function doDelete();
    public function doNeedAuth();

}