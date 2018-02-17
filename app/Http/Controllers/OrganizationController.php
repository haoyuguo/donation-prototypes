<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    public function show($id = null)
    {
        if (is_numeric($id)) {
            return response()->json([
                'name' => 'Organization # ' . $id
            ]);
        }

        return $this->getDefaultOrganizationInfo();
    }

    private function getDefaultOrganizationInfo() {
        return response()->json([
            'name' => env('ORG_NAME', 'T.E.C'),
            'url' => env('ORG_URL', ''),
            'logo' => env('ORG_LOGO', ''),
            'description' => '(This is the information for the creator organization.  Provide a valid ID to get information for a specific organization.)'
        ]);
    }
}
