<?php

namespace App\Http\Controllers\Panel;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use chillerlan\QRCode\QRCode;
use chillerlan\QRCode\QROptions;

use App\Models\Card;

class BuilderInvitationController extends Controller
{
    public function show($slug)
    {

        $invitacion = Card::where('slug', $slug)->firstOrFail();

        $options = new QROptions(
            [
              'eccLevel' => QRCode::ECC_L,
              'outputType' => QRCode::OUTPUT_MARKUP_SVG,
              'version' => 5,
            ]
          );


        $qrCode = (new QRCode($options))->render('http://localhost:8000/invitacion/'.$invitacion->slug);


        return view('panel.builderInvitacion', compact('invitacion', 'qrCode'));
    }
}
