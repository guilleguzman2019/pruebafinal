<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cards', function (Blueprint $table) {
            $table->id();

            $table->string('status');
            $table->string('title');
            $table->string('slug') -> unique();
            $table->string('subtitle', 500);
            $table->string('home_bg_desktop')->nullable();
            $table->string('home_bg_mobile')->nullable();
            $table->string('history_title')->nullable();
            $table->longText('history_description')->nullable();
            $table->string('music_title')->nullable();
            $table->longText('music_description')->nullable();
            $table->string('music_invitation')->nullable();
            $table->string('gift_title')->nullable();
            $table->longText('gift_description')->nullable();
            $table->string('gift_bank')->nullable();
            $table->string('dresscode_title')->nullable();
            $table->longText('dresscode_description')->nullable();
            $table->string('transport_private_title')->nullable();
            $table->longText('transport_private_description')->nullable();
            $table->string('recomendation_title')->nullable();
            $table->string('recomendation_transport')->nullable();
            $table->string('recomendation_host')->nullable();
            $table->string('confirm_title')->nullable();
            $table->string('godparent_title')->nullable();
            $table->string('instagram_title')->nullable();
            $table->string('instagram_hashtag')->nullable();

            $table->longText('confirm_description')->nullable();
            $table->longText('phrase')->nullable();

            $table->tinyInteger('dresscode_type');
            $table->boolean('countdown_status')->default(0);
            $table->boolean('phrase_status')->default(0);
            $table->boolean('history_status')->default(0);
            $table->boolean('music_status')->default(0);
            $table->boolean('gift_status')->default(0);
            $table->boolean('dresscode_status')->default(0);
            $table->boolean('recomendation_status')->default(0);
            $table->boolean('godparent_status')->default(0);
            $table->boolean('confirm_status')->default(0);
            $table->boolean('instagram_status')->default(0);

            $table->unsignedBigInteger('template_id') ->nullable();
            $table->foreign('template_id')->references('id')->on('templates')->nullOnDelete();

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->datetime('start_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cards');
    }
};
