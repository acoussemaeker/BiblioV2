<?php
/**
 * Created by PhpStorm.
 * User: anthony
 * Date: 13/10/2015
 * Time: 19:41
 */


	include_once('Helper.php');

	const PARAM_WS = 'ws';
	const PATH_WEBSERVICES = 'WebServices';

	// We verify all needed parameters.
	if(!isset($_REQUEST[PARAM_WS]))
        Helper::ThrowAccessDenied();

	// We gets the informations of the desired service.
	$serviceName = ucfirst(strtolower('WS_'.$_REQUEST['ws']));
	$servicePath = PATH_WEBSERVICES.'\\'.$serviceName.'.php';

	// If the service doesn't exist, we stop the request.
	if (!file_exists($servicePath))
        Helper::ThrowAccessDenied();

	// We create and execute the service.
	require_once($servicePath);
	$service = new $serviceName();
	$result = $service->DoPost();

	// At the end, we return the result.
	if ($result !== null)
        echo json_encode($result);
