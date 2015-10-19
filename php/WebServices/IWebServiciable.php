<?php

interface IWebServiciable
{
    public function DoGet();
    public function DoPost();
    public function DoPut();
    public function DoDelete();
}