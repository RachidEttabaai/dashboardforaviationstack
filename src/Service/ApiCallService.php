<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\ResponseInterface;
use Symfony\Contracts\HttpClient\HttpClientInterface;

class ApiCallService
{
    private $httpclient;

    private string $apiurl;

    public function __construct(HttpClientInterface $httpclient)
    {
        $this->httpclient = $httpclient;
    }

    public function setApiUrl(string $apiurl)
    {
        $this->apiurl = $apiurl;
    }

    /**
     * Get Datas from API with the httpclient component
     *
     * @return ResponseInterface
     */
    private function getDatasFromAPI(): ResponseInterface
    {
        $request = $this->httpclient->request(
            "GET",
            $this->apiurl);

        return $request;
    }
    
    /**
     * Show datas from an API in an array
     *
     * @return array
     */
    public function showDatasFromAPI(): array
    {
        return $this->getDatasFromAPI()->toArray();
    } 
}