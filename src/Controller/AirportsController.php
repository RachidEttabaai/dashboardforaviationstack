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
    private string $apiurl = "http://api.aviationstack.com/v1/airports?access_key=b930884297de709e3f1531ffda8e936a&limit=6471";
    
    /**
     * Get the aviation stack API url
     *
     * @return string
     */
    public function getApiUrl()
    {
        return $this->apiurl;
    }
    
    /**
     * Get all airports datas using aviationstack API
     * @param  ApiCallService $apiCallService
     * @return string
     */
    private function getAirportsDatasFromApi(ApiCallService $apiCallService)
    {
        $apiCallService->setApiUrl($this->getApiUrl());
        
        return json_encode($apiCallService->showDatasFromAPI());

    }

    /**
     * Return all airports datas using aviationstack API 
     * @Route("/all",name="allairports", methods={"GET"})
     * @param ApiCallService $apiCallService
     * @return JsonResponse
     */
    public function getAll(ApiCallService $apiCallService)
    {
        $response = new Response();

        $response->setContent($this->getAirportsDatasFromApi($apiCallService));

        $response->headers->set("Content-Type", "application/json");
        $response->headers->set("Access-Control-Allow-Origin", "*");

        return $response;
        
    }
    
}