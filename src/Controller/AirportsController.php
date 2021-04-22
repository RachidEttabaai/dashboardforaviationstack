<?php

namespace App\Controller;

use App\Service\ApiCallService;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route("/api/airports")
 */
class AirportsController extends AbstractController
{
    /**
     * Get all airports datas from aviationstack API
     * @Route("/all",name="allairports", methods={"GET"})
     * 
     * @param ApiCallService $apiCallService
     * @return JsonResponse
     */
    public function getAll(ApiCallService $apiCallService)
    {
        $apiCallService->setApiUrl("http://api.aviationstack.com/v1/airports?access_key=b930884297de709e3f1531ffda8e936a&limit=6471");
        
        $response = new Response();

        $response->setContent(json_encode($apiCallService->showDatasFromAPI()));

        $response->headers->set("Content-Type", "application/json");
        $response->headers->set("Access-Control-Allow-Origin", "*");

        return $response;
        
    }
    
}